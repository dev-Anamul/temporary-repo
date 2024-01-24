import PyPDF2
import json

# Open the PDF file in binary read mode
pdf_file_path = './046_Annual Report 2021-22.pdf'
pdf_file = open(pdf_file_path, 'rb')

# Create a PDF reader object
pdf_reader = PyPDF2.PdfReader(pdf_file)

# Initialize a list to store extracted data
extracted_data = []

# Get the number of pages in the PDF
num_pages = len(pdf_reader.pages)

# Loop through each page and extract text
for page_num in range(num_pages):
    page = pdf_reader.pages[page_num]
    page_text = page.extract_text()

    # Do something with the extracted text from the page
    if (page_num == 45):
        extracted_data.append({'page': page_num + 1, 'text': page_text})

# Close the PDF file
pdf_file.close()

# Save the extracted data to a JSON file
json_file_path = 'extracted_data.json'
with open(json_file_path, 'w') as json_file:
    json.dump(extracted_data, json_file, indent=4)

print(f"Extracted data saved to {json_file_path}")
