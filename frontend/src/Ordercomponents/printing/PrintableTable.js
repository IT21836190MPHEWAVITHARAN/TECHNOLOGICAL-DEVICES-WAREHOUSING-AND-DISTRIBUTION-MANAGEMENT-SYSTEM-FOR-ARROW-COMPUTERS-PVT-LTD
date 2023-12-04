import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrintableTable = ({ orders }) => {
  const createPDF = () => {
    const pdf = new jsPDF();

    // Define the element to be converted to a PDF
    const table = document.getElementById('table-to-print');

    // Use html2canvas to capture the table as an image
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add the captured image to the PDF
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

      // Increase the position and add new page if necessary
      heightLeft -= pageHeight;
      if (heightLeft > 0) {
        pdf.addPage();
        position -= pageHeight;
      } else {
        position = 0;
      }
    });

    // Save or download the PDF
    pdf.save('orders.pdf');
  };

  return (
    <div>
      <table id="table-to-print">
     
        <thead>
          <tr>
          <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>ORDER ITEMS</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
          </tr>
        </thead>
        <tbody>
          {orders !==null ?(
            orders.map((order) =>(
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.createdAt.substring(0,10)}</td>
                <td>{order.orderItems.name}</td>
                <td>Rs.{order.totalPrice}</td>
                <td>
                  { order.isPaid ? (
                    order.paidAt.substring(0,10)
                  ) : (
                    <FaTimes style={{color: 'red'}}/>
                  )}
                </td>
                <td>
                  { order.isDelivered ? (
                    order.deliveredAt.substring(0,10)
                  ) : (
                    <FaTimes style={{color: 'red'}}/>
                  )}
                </td>

                <td>
                    <Link to={`/OrderDetails/${order._id}`}><button>VIEW</button></Link>
                </td>
                
              </tr>
            ))
          ) :(
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )
          }
        </tbody>
      
      </table>
      <button onClick={createPDF}>Download PDF</button>
    </div>
  );
};

export default PrintableTable;
