"""Mild cool grade for AJM realization photos used on the home grid."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

ROOT = Path(r"C:\Users\Tymek\Documents\WEBSITES\ajm\src\assets")
FILES = [
    "ajm-pompa-panasonic-aquarea.jpg",
    "ajm-jednostki-zew-midea-duo.jpg",
    "ajm-kotlownia-midea-czerwone.jpg",
    "ajm-podlogowka-petle.jpg",
    "ajm-pompa-midea-dach.jpg",
    "ajm-kociol-hlazar-pellet.jpg",
    "ajm-kotlownia-rotenso-filtry.jpg",
    "ajm-pompa-stiebel-outdoor.jpg",
]


def grade(path: Path) -> None:
    im = Image.open(path).convert("RGB")
    im = ImageEnhance.Color(im).enhance(0.88)
    im = ImageEnhance.Contrast(im).enhance(1.12)
    im = ImageEnhance.Brightness(im).enhance(1.03)
    im = ImageEnhance.Sharpness(im).enhance(1.12)

    w, h = im.size
    # Soft vignette via elliptical gradient
    vignette = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(vignette)
    pad_x, pad_y = int(w * 0.08), int(h * 0.08)
    draw.ellipse((-pad_x, -pad_y, w + pad_x, h + pad_y), fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(radius=max(w, h) // 10))
    navy = Image.new("RGB", (w, h), (16, 26, 46))
    # Where vignette is dark (edges), blend toward navy
    edge = Image.eval(vignette, lambda p: 255 - p)
    im = Image.composite(Image.blend(im, navy, 0.28), im, edge)

    im.save(path, quality=90, optimize=True)
    print("graded", path.name, im.size)


def main() -> None:
    for name in FILES:
        p = ROOT / name
        if p.exists():
            grade(p)
        else:
            print("missing", name)


if __name__ == "__main__":
    main()
