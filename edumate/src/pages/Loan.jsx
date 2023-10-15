import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Loan() {
    const isMobile = window.innerWidth <= 767;
    // const [ loans, setLoan ] = useState([]);

    // useEffect(() => { 
    //     async function fetchData(){
    //         console.log("hihihihi")
    //         const response = await axios.get(`https://edumate.glitch.me/loans`);
    //         setLoan(response.data.data.Module)
    //         console.log(response);
    //     }
    //     fetchData();
    // }, [loans]);

    const loans = [
        {
            "body": "Sbi.co.inhttps://sbi.co.in \\xe2\\x80\\xba web \\xe2\\x80\\xba loans \\xe2\\x80\\xba education-loans",
            "domain": "sbi.co.in",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 1,
            "title": "Apply for Educational Loan Online in India",
            "url": "https://sbi.co.in/web/personal-banking/loans/education-loans"
        },
        {
            "body": "Forbeshttps://www.forbes.com \\xe2\\x80\\xba advisor \\xe2\\x80\\xba education-loan",
            "domain": "forbes.com",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 2,
            "title": "Education Loan: Best Student Loan In India For 2023",
            "url": "https://www.forbes.com/advisor/in/education-loan/"
        },
        {
            "body": "Avansehttps://www.avanse.com \\xe2\\x80\\xba study-loan-india",
            "domain": "avanse.com",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 3,
            "title": "Education Loans for Students in India",
            "url": "https://www.avanse.com/education-loan/study-loan-india"
        },
        {
            "body": "BankBazaarhttps://www.bankbazaar.com \\xe2\\x80\\xba education-loan",
            "domain": "bankbazaar.com",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 4,
            "title": "Education Loan - Complete Info about Student loan in India ...",
            "url": "https://www.bankbazaar.com/education-loan.html"
        },
        {
            "body": "Union Bank of Indiahttps://www.unionbankofindia.co.in \\xe2\\x80\\xba english \\xe2\\x80\\xba educat...",
            "domain": "unionbankofindia.co.in",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 5,
            "title": "Instant Loan for Students | Education Loan Apply Online | UBI",
            "url": "https://www.unionbankofindia.co.in/english/education-loan.aspx"
        },
        {
            "body": "HDFC Bankhttps://www.hdfcbank.com \\xe2\\x80\\xba Popular Loans",
            "domain": "hdfcbank.com",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 6,
            "title": "Apply for Education Loan Online in India",
            "url": "https://www.hdfcbank.com/personal/borrow/popular-loans/educational-loan/educational-loan-for-indian-education"
        },
        {
            "body": "Bank of Barodahttps://www.bankofbaroda.in \\xe2\\x80\\xba Personal \\xe2\\x80\\xba Loans",
            "domain": "bankofbaroda.in",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 7,
            "title": "Instant Student Education Loan Online in India",
            "url": "https://www.bankofbaroda.in/personal-banking/loans/education-loan"
        },
        {
            "body": "ICICI Bankhttps://www.icicibank.com \\xe2\\x80\\xba Loans",
            "domain": "icicibank.com",
            "keyword": "loans for student in india",
            "number_query": 10,
            "page_query": 1,
            "position": 8,
            "title": "Educational Loan: Apply Student Loan Online in India",
            "url": "https://www.icicibank.com/personal-banking/loans/education-loan"
        }
    ]

    return (
        <div>
        {isMobile ? (
          <Container className="p-4" style={ {
            minHeight: '80vh',
            display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: "#F5F5F5",
            flexDirection: 'column',
          }}>
              <div className="">
                <h3>Education Loans</h3>
                {Array.isArray(loans) && loans.map((loan) => (
                   <Container className="d-flex justify-content-end bg-white p-2 rounded-4 gap-4 mt-3">
                    <Container className="d-flex-column m-0 align-content-center " style={{width:"400px"}}>
                        <span className="overflow-hidden" style={{fontSize: "16px", fontWeight: "700"}}>{loan.title}</span>
                        <Container className="d-flex justify-content-between text-secondary p-0 w-100 mt-3 mb-2">
                        <span>Domain: {loan.domain}</span>
                        {/* <span>Time: 15 mins</span> */}
                        </Container>
                    </Container>
                   <Container className="w-50 d-flex justify-content-center align-items-center">
                       <div>
                            <a href={loan.url}>
                                <Button className="rounded-pill p-2" style={{width: "100px"}}>Apply</Button>
                            </a>
                       </div>
                   </Container>
               </Container>
                ))}
              </div>
          </Container>
        ) : (
          <div>
            <h1>Laptop</h1>
          </div>
        )}
        </div>
    )
}

export default Loan
