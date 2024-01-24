/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
const PDFDocument = require('pdfkit-table');
const fs = require('fs');

const generateReport = async ({ data, header, user, startYear, endYear }) => {
    // Create a PDF document
    const pdfDoc = new PDFDocument({
        size: 'A4',
        margin: 30,
        layout: 'landscape',
        fontSize: 10,
    });

    const filePath = `/report/${user?.id}-${user?.firstName}-${startYear}-${endYear}.pdf`;
    const output = fs.createWriteStream(`public/${filePath}`);

    // Pipe the PDF content to a file
    pdfDoc.pipe(output);

    // Set up the layout of the table
    const tableConfig = {
        title: {
            label: `EXPENSE SUMMARY PREPARED FOR ${user?.fullName.toUpperCase()}`,
            font: 'Helvetica-Bold',
            fontSize: 20,
            color: '#000000',
            alignment: 'center',
        },
        subtitle: {
            label: `For the period 1 April ${startYear} to 31 March ${endYear}`,
            font: 'Helvetica-Bold',
            fontSize: 12,
            color: '#000000',
            alignment: 'left',
        },
        headers: header,
        rows: data,
        divider: {
            header: { disabled: false, width: 2, opacity: 1 },
            horizontal: { disabled: false, width: 0.5, opacity: 0.5 },
        },
        widths: [150, 50, 100], // Width of each column
        layout: 'lightHorizontalLines', // Table layout style
        prepareHeader: () => pdfDoc.fontSize(10), // {Function}
        prepareRow: () => pdfDoc.fontSize(10),
    };

    // Add the table to the PDF
    pdfDoc.table(tableConfig);

    // pdfDoc.text('some text');

    // Finalize the PDF
    pdfDoc.end();

    return filePath;
};

module.exports = {
    generateReport,
};
