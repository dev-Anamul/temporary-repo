from PyPDF2 import PdfFileMerger
import fitz 

import pytesseract
from PIL import Image

from typing import Tuple
import os


pdf_file = fitz.open("./annual_report_2014_15.pdf") # type: ignore

for page_index in range(len(pdf_file)):
    # Get the page object
    page = pdf_file[page_index]

    # Get the image list
    image_list = page.getImageList()

    # Loop through the images
    for image_index, image in enumerate(image_list):

        # Get the image properties
        xref = image[0]
        width = image[2]
        height = image[3]

        # Load the image data
        image_data = pdf_file.extractImage(xref)
        image_bytes = image_data["image"]

        # Save the image as a PNG file
        image_name = f"image{page_index}_{image_index}.png"
        with open(image_name, "wb") as f:
            f.write(image_bytes)

        # Open the image with PIL
        image = Image.open(image_name)

        # Extract the text from the image using PyTesseract
        text = pytesseract.image_to_string(image)

        # Print the text
        print(text)
