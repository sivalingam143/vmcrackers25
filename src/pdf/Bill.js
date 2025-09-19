import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Logo from "../assets/images/storelogo.png";
import API_DOMAIN from "../../src/config/config";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 0,
    position: "relative",
  },
  // image watermark start
  watermark: {
    position: "absolute",
    top: "15%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "70%",
    opacity: 0.2,
    margin: "0 auto",
    display: "flex",
  },
  // image watermark end
  // static style start
  section: {
    margin: 10,
    flexGrow: 1,
    border: 1,
  },
  width: {
    width: "33.3%",
  },
  f9: {
    fontSize: 9,
  },
  f10: {
    fontSize: 10,
  },
  large: {
    fontSize: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  right: {
    textAlign: "right",
  },
  center: {
    textAlign: "center",
  },
  top: {
    borderTop: 1,
  },
  bottom: {
    borderBottomWidth: 1,
  },
  bgColor: {
    backgroundColor: "#00a79d",
    color: "#fff",
  },
  alignItems: {
    display: "flex",
    alignItems: "center",
  },
  brdright: {
    borderRight: 1,
  },
  brdrclr: {
    borderRightColor: "#fff",
  },
  pad3: {
    padding: 3,
  },
  pad5: {
    padding: 5,
  },
  pad10: {
    padding: 10,
  },
  w50: {
    width: "50%",
  },
  w100: {
    width: "100%",
  },
  // static style end
  // page content style  start
  head: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  table: {
    display: "table",
  },

  tableRow: {
    flexDirection: "row",
   
     
  },
  tableCol: {
    width: "12%",
  },
  tableSno: {
    width: "8%",
  },
  tablePro: {
    width: "45%",
  },
  tableCell: {
    margin: 5,
    fontSize: 11.5,
    textAlign: "center",
   
  },
  totalCell: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
  },
  vh: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  // page content style end
});

const Bill = ({ data }) => {
  console.log(data);
  const rowsPerPage = 35;

  const products = Object.keys(data)
    .filter((key) => !isNaN(key))
    .map((key) => data[key]);

  const groupedProducts = products.reduce((acc, product) => {
    const groupKey =
      product.discount_lock === 1
        ? "Net Rate"
        : `Discount(${product.discount}%)`;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(product);
    return acc;
  }, {});
  const productPages = [];
  let currentPage = [];
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`${API_DOMAIN}/company.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ search_text: "" }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCompanyData(data.body.company);
        console.log("Fetched Company Data:", data.body.company);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, []);
  Object.keys(groupedProducts).forEach((groupKey) => {
    groupedProducts[groupKey].forEach((item) => {
      if (currentPage.length < rowsPerPage) {
        currentPage.push({ groupKey, item });
      } else {
        productPages.push(currentPage);
        currentPage = [{ groupKey, item }];
      }
    });
  });

  if (currentPage.length) {
    productPages.push(currentPage);
  }
  const discounttotal = data.sub_total - data.total;
  const roundValue = (value) => Math.round(value);

  return (
    <Document>
      {productPages.map((pageProducts, pageIndex) => (
        <Page key={pageIndex} size="A4" style={styles.page}>
          <Image style={styles.watermark} src={Logo} />
          <View style={styles.section}>
            <View
              style={[
                styles.head,
                styles.bgColor,
                styles.alignItems,
                styles.pad5,
              ]}
            >
              <View style={styles.width}>
                <View style={styles.f9}>
                  <Text>Enquiry No. : {data.enq}</Text>
                </View>
              </View>
              <View style={styles.width}>
                <View style={[styles.large, styles.center]}>
                  <Text>Estimation</Text>
                </View>
              </View>
              <View style={styles.width}>
                <View style={[styles.f9, styles.right]}>
                  <Text>Date : {new Date().toLocaleDateString()}</Text>
                </View>
              </View>
            </View>

            <View style={[styles.head, styles.f10]}>
              <View style={[styles.w50, styles.brdright, styles.pad5]}>
                <Text style={styles.large}>{companyData.company_name}</Text>
                <Text>{companyData.address}</Text>
                <Text>
                  Phone : {companyData.phone} , {companyData.mobile}
                  
                </Text>
                {/* <Text>GST : {companyData.gst_no}</Text> */}
              </View>
              <View style={[styles.w50, styles.pad5]}>
                <Text>{data.customer.name}</Text>
                <Text>{data.customer.address}</Text>
                <Text>
                  {data.customer.city}, {data.customer.state}
                </Text>
                <Text>Email : {data.customer.email}</Text>
                <Text>Phone : {data.customer.mobile}</Text>
              </View>
            </View>

            <View style={styles.productTable}>
              <View style={[styles.bgColor, styles.bold]}>
                <View
                  style={[styles.w100, styles.head, styles.table, styles.large]}
                >
                  <View
                    style={[styles.brdright, styles.brdrclr, styles.tableSno]}
                  >
                    <Text style={styles.tableCell}>S No</Text>
                  </View>
                  <View
                    style={[styles.tablePro, styles.brdright, styles.brdrclr]}
                  >
                    <Text style={styles.tableCell}>Product Name</Text>
                  </View>
                  <View
                    style={[styles.tableCol, styles.brdright, styles.brdrclr]}
                  >
                    <Text style={styles.tableCell}>Content</Text>
                  </View>
                  <View
                    style={[styles.tableCol, styles.brdright, styles.brdrclr]}
                  >
                    <Text style={styles.tableCell}>Qty</Text>
                  </View>
                  <View
                    style={[styles.tableCol, styles.brdright, styles.brdrclr]}
                  >
                    <Text style={styles.tableCell}>Rate</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Amount</Text>
                  </View>
                </View>
              </View>

              {pageProducts.map((product, index) => (
                <React.Fragment key={product.item.id}>
                  {index === 0 && (
                    <View style={[styles.tableRow, styles.discountRow,styles.top]}>
                      <View style={[styles.w100, styles.center]}>
                        <Text style={[styles.center, styles.f9, styles.pad3]}>
                          {product.groupKey}
                        </Text>
                      </View>
                    </View>
                  )}

                  <View style={[styles.tableRow, styles.bottom,styles.top]} wrap={false}>
                    <View style={styles.tableSno}>
                      <Text
                        style={[
                          styles.center,
                          styles.f9,
                          styles.brdright,
                          styles.pad3,
                        ]}
                      >
                        {index + 1}
                      </Text>
                    </View>
                    <View style={styles.tablePro}>
                      <Text
                        style={[
                          styles.center,
                          styles.f9,
                          styles.brdright,
                          styles.pad3,
                        ]}
                      >
                        {product.item.name}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text
                        style={[
                          styles.center,
                          styles.f9,
                          styles.brdright,
                          styles.pad3,
                        ]}
                      >
                        {product.item.product_content}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text
                        style={[
                          styles.center,
                          styles.f9,
                          styles.brdright,
                          styles.pad3,
                        ]}
                      >
                        {product.item.qty}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text
                        style={[
                          styles.center,
                          styles.f9,
                          styles.brdright,
                          styles.pad3,
                        ]}
                      >
                        {product.item.per_price}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={[styles.center, styles.f9, styles.pad3]}>
                        {roundValue(product.item.per_price * product.item.qty)}
                      </Text>
                    </View>
                  </View>
                </React.Fragment>
              ))}
            </View>
            {pageIndex === productPages.length - 1 && (
              <View
                style={[styles.totalCell, styles.head, styles.f10, styles.top]}
              >
                <View style={[styles.w50, styles.brdright, styles.pad5]}>
                  <Text style={styles.large}>Payments Details</Text>
                  <Text>Bank name : {companyData.bank_name}</Text>
                  <Text>Acc Holder Name : {companyData.acc_holder_name}</Text>
                  <Text>Acc Number : {companyData.acc_number}</Text>
                  <Text>IFSC Code: {companyData.ifsc_code}</Text>
                  <Text>GPAY Number : {companyData.mobile}</Text>
                </View>
                <View style={[styles.totalBox, styles.w50, styles.right]}>
                  <Text style={[styles.bottom, styles.vh]}>
                    Net Total: {data.sub_total}
                  </Text>
                  <Text style={[styles.bottom, styles.vh]}>
                    Discount Amount: {discounttotal}
                  </Text>
                  <Text style={[styles.bottom, styles.vh]}>
                    Total Amount: {data.total}
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={[styles.tableRow, styles.discountRow]}>
            <View style={[styles.w100, styles.center]}>
              <Text style={[styles.center, styles.f9, styles.pad3]}>
                Page {pageIndex + 1} of {productPages.length}
              </Text>
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default Bill;
