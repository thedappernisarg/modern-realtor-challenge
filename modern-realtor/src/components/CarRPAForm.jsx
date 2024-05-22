import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/Form.css";
import jsPDF from "jspdf";

const CarRPAForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    "Filled Date": "",
    "Parcel Number": "",
    "Full Name": "",
    "Property Description": "",
    "Street Address": "",
    "Property State": "",
    "Property City": "",
    "Property County": "",
    "Property ZipCode": "",
    "Purchase Price": "",
    Financing: "",
    Residency: "",
    "Escrow Completion Date": "",
    "Escrow Completion Days": "",
    "Disclosure Received": false,
    "Listing Agent Firm Name": "",
    "Listing Agent Agency Relationship": "",
    "Selling Agent Firm Name": "",
    "Selling Agent Agency Relationship": "",
    "Initial Deposit Amount": "",
    "Buyer Direct Deposit Method": "",
    "Buyer Deposit With Agent Type": "",
    "Increased Deposit Amount": "",
    "Increased Deposit Days": "",
    "All Cash Offer Verification": "",
    "Loan Type": "",
    "First Loan Amount": "",
    "First Loan Type": "",
    "First Loan Rate": "",
    "First Loan Points": "",
    "Second Loan Amount": "",
    "Second Loan Type": "",
    "Second Loan Rate": "",
    "Second Loan Points": "",
    "FHA/VA Repair Notice Days": "",
    "Balance of Down Payment Amount": "",
  });
  const [selectedField, setSelectedField] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFocus = (field) => {
    setSelectedField(field);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCheckboxChange = (field) => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 10;

    for (const [key, value] of Object.entries(formData)) {
      doc.text(`${key}: ${value}`, 10, yPos);
      yPos += 10;
    }
    doc.save("Download.pdf");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <Form.Group controlId="FilledDate" className="mb-5">
            <Form.Label>When was this form filled out?</Form.Label>
            <Form.Control
              type="date"
              onFocus={() => handleFocus("Filled Date")}
              onChange={(e) => handleChange("Filled Date", e.target.value)}
              value={formData["Filled Date"]}
            />
          </Form.Group>
        );
      case 2:
        return (
          <Form.Group controlId="formParcelNumber" className="mb-5">
            <Form.Label>
              The Assessor's Parcel Number assigned to the property by the
              county assessor's office.
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Parcel Number"
              onFocus={() => handleFocus("Parcel Number")}
              onChange={(e) => handleChange("Parcel Number", e.target.value)}
              value={formData["Parcel Number"]}
            />
          </Form.Group>
        );
      case 3:
        return (
          <Form.Group controlId="formFullName" className="mb-5">
            <Form.Label>
              The party making the offer to purchase the property("Buyer").
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Full name"
              onFocus={() => handleFocus("Full Name")}
              onChange={(e) => handleChange("Full Name", e.target.value)}
              value={formData["Full Name"]}
            />
          </Form.Group>
        );
      case 4:
        return (
          <Form.Group controlId="Property Description" className="mb-5">
            <Form.Label>
              The description of the property that the buyer intends to acquire
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="The real property to be acquired:"
              onFocus={() => handleFocus("Property Description")}
              onChange={(e) =>
                handleChange("Property Description", e.target.value)
              }
              value={formData["Property Description"]}
            />
          </Form.Group>
        );
      case 5:
        return (
          <Form.Group controlId="formPropertyAddress" className="mb-5">
            <Form.Label>
              What is the address of the property you are making an offer on?
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Street address"
              onFocus={() => handleFocus("Street Address")}
              onChange={(e) => handleChange("Street Address", e.target.value)}
              value={formData["Street Address"]}
            />
          </Form.Group>
        );
      case 6:
        return (
          <Form.Group controlId="formPropertyState" className="mb-5">
            <Form.Label>The State where the property is located.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter State of the Property"
              onFocus={() => handleFocus("Property State")}
              onChange={(e) => handleChange("Property State", e.target.value)}
              value={formData["Property State"]}
            />
          </Form.Group>
        );
      case 7:
        return (
          <Form.Group controlId="formPropertyCity" className="mb-5">
            <Form.Label>The City where the property is located.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City of the Property"
              onFocus={() => handleFocus("Property City")}
              onChange={(e) => handleChange("Property City", e.target.value)}
              value={formData["Property City"]}
            />
          </Form.Group>
        );
      case 8:
        return (
          <Form.Group controlId="formPropertyCounty" className="mb-5">
            <Form.Label>The County where the property is located.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter County of the Property"
              onFocus={() => handleFocus("Property County")}
              onChange={(e) => handleChange("Property County", e.target.value)}
              value={formData["Property County"]}
            />
          </Form.Group>
        );
      case 9:
        return (
          <Form.Group controlId="formPropertyZipCode" className="mb-5">
            <Form.Label>What is the selling property's Zip Code?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Zipcode of the Property"
              onFocus={() => handleFocus("Property ZipCode")}
              onChange={(e) => handleChange("Property ZipCode", e.target.value)}
              value={formData["Property ZipCode"]}
            />
          </Form.Group>
        );
      case 10:
        return (
          <Form.Group controlId="purchasePrice" className="mb-5">
            <Form.Label>Purchase Price (Total):</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount ($)"
              onChange={(e) => handleChange("Purchase Price", e.target.value)}
              value={formData["Purchase Price"]}
            />
          </Form.Group>
        );
      case 11:
        return (
          <Form.Group controlId="formFinancing" className="mb-5">
            <Form.Label>How will this home be financed?</Form.Label>
            <Form.Control
              as="select"
              onFocus={() => handleFocus("Financing")}
              onChange={(e) => handleChange("Financing", e.target.value)}
              value={formData["Financing"]}
            >
              <option>Select financing option</option>
              <option>Cash</option>
              <option>Mortgage</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        );

      case 12:
        return (
          <Form.Group controlId="formResidency" className="mb-5">
            <Form.Label>What kind of residency is this for you?</Form.Label>
            <Form.Control
              as="select"
              onFocus={() => handleFocus("Residency")}
              onChange={(e) => handleChange("Residency", e.target.value)}
              value={formData["Residency"]}
            >
              <option>Select residency option</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>Investment</option>
              <option>Vacation</option>
            </Form.Control>
          </Form.Group>
        );
      case 13:
        return (
          <Form.Group controlId="formEscrowCompletionDate" className="mb-5">
            <Form.Label>
              The date when the escrow process will be completed.
            </Form.Label>
            <Form.Control
              type="date"
              onChange={(e) =>
                handleChange("Escrow Completion Date", e.target.value)
              }
              value={formData["Escrow Completion Date"]}
            />
            <Form.Text className="text-muted">mm/dd/yyyy</Form.Text>
            <Form.Label>or</Form.Label>
            <Form.Control
              type="number"
              placeholder="0 (days)"
              onChange={(e) =>
                handleChange("Escrow Completion Days", e.target.value)
              }
              value={formData["Escrow Completion Days"]}
            />
            <Form.Text className="text-muted">(days)</Form.Text>
          </Form.Group>
        );
      case 14:
        return (
          <Form.Group controlId="formDisclosureReceived" className="mb-5">
            <Form.Check
              type="checkbox"
              label="Both the buyer and seller confirm that they have received and reviewed the Disclosure Regarding Real Estate Agency Relationships form."
              onChange={() => handleCheckboxChange("Disclosure Received")}
              checked={formData["Disclosure Received"]}
            />
          </Form.Group>
        );
      case 15:
        return (
          <Form.Group controlId="formListingAgent" className="mb-5">
            <Form.Label>Listing Agent:</Form.Label>
            <Form.Control
              type="text"
              placeholder="ABC Realty"
              onChange={(e) =>
                handleChange("Listing Agent Firm Name", e.target.value)
              }
              value={formData["Listing Agent Firm Name"]}
            />
            <Form.Text className="text-muted">(Print Firm Name)</Form.Text>
            <Form.Label>
              Which best describes the agency relationship?
            </Form.Label>
            <Form.Check
              type="radio"
              label="The firm is the agent of: The Seller Exclusively"
              onChange={() =>
                handleChange(
                  "Listing Agent Agency Relationship",
                  "Seller Exclusively"
                )
              }
              checked={
                formData["Listing Agent Agency Relationship"] ===
                "Seller Exclusively"
              }
            />
            <Form.Check
              type="radio"
              label="The firm is the agent of: Both the Buyer and Seller"
              onChange={() =>
                handleChange(
                  "Listing Agent Agency Relationship",
                  "Both the Buyer and Seller"
                )
              }
              checked={
                formData["Listing Agent Agency Relationship"] ===
                "Both the Buyer and Seller"
              }
            />
          </Form.Group>
        );
      case 16:
        return (
          <Form.Group controlId="formSellingAgent" className="mb-5">
            <Form.Label>Selling Agent:</Form.Label>
            <Form.Control
              type="text"
              placeholder="ABC Realty"
              onChange={(e) =>
                handleChange("Selling Agent Firm Name", e.target.value)
              }
              value={formData["Selling Agent Firm Name"]}
            />
            <Form.Text className="text-muted">(Print Firm Name)</Form.Text>
            <Form.Label>
              Which best describes the agency relationship?
            </Form.Label>
            <Form.Check
              type="radio"
              label="The firm is the agent of: The Buyer Exclusively"
              onChange={() =>
                handleChange(
                  "Selling Agent Agency Relationship",
                  "Buyer Exclusively"
                )
              }
              checked={
                formData["Selling Agent Agency Relationship"] ===
                "Buyer Exclusively"
              }
            />
            <Form.Check
              type="radio"
              label="The firm is the agent of: The Seller Exclusively"
              onChange={() =>
                handleChange(
                  "Selling Agent Agency Relationship",
                  "Seller Exclusively"
                )
              }
              checked={
                formData["Selling Agent Agency Relationship"] ===
                "Seller Exclusively"
              }
            />
            <Form.Check
              type="radio"
              label="The firm is the agent of: Both the Buyer and Seller"
              onChange={() =>
                handleChange(
                  "Selling Agent Agency Relationship",
                  "Both the Buyer and Seller"
                )
              }
              checked={
                formData["Selling Agent Agency Relationship"] ===
                "Both the Buyer and Seller"
              }
            />
          </Form.Group>
        );
      case 17:
        return (
          <Form.Group controlId="formResidency" className="mb-5">
            <Form.Label>What kind of residency is this for you?</Form.Label>
            <Form.Control
              as="select"
              onFocus={() => handleFocus("Residency")}
              onChange={(e) => handleChange("Residency", e.target.value)}
              value={formData["Residency"]}
            >
              <option>Select residency option</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>Investment</option>
              <option>Vacation</option>
            </Form.Control>
          </Form.Group>
        );
      case 18:
        return (
          <Form.Group controlId="initialDeposit" className="mb-5">
            <Form.Label>A. Initial Deposit:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount ($)"
              onChange={(e) =>
                handleChange("Initial Deposit Amount", e.target.value)
              }
              value={formData["Initial Deposit Amount"]}
            />
          </Form.Group>
        );
      case 19:
        return (
          <Form.Group controlId="buyerDirectDeposit" className="mb-5">
            <Form.Label>(1) Buyer Direct Deposit:</Form.Label>
            {/* Options */}
            {/* Buyer Direct Deposit Method */}
            <Form.Control
              as="select"
              onChange={(e) =>
                handleChange("Buyer Direct Deposit Method", e.target.value)
              }
              value={formData["Buyer Direct Deposit Method"]}
            >
              <option>Select Method</option>
              <option>Electronic Funds Transfer</option>
              <option>Cashier's Check</option>
              <option>Personal Check</option>
              <option>Other</option>
            </Form.Control>
            {/* Timeline */}
            <Form.Label>Within 3 business days after acceptance or:</Form.Label>
            <Form.Control type="text" placeholder="Alternative timeline" />
          </Form.Group>
        );
      case 20:
        return (
          <Form.Group controlId="buyerDepositWithAgent" className="mb-5">
            <Form.Label>(2) Buyer Deposit With Agent:</Form.Label>
            {/* Buyer Deposit With Agent Type */}
            <Form.Control
              type="text"
              placeholder="Check Type"
              onChange={(e) =>
                handleChange("Buyer Deposit With Agent Type", e.target.value)
              }
              value={formData["Buyer Deposit With Agent Type"]}
            />
            {/* Timeline */}
            <Form.Label>Deposit checks given to agent:</Form.Label>
            <Form.Control type="text" placeholder="Alternative timeline" />
            {/* Recipient */}
            <Form.Label>To the agent submitting the offer or to:</Form.Label>
            <Form.Control type="text" placeholder="Choice of Recipient" />
          </Form.Group>
        );
      case 21:
        return (
          <Form.Group controlId="increasedDeposit" className="mb-5">
            <Form.Label>B. Increased Deposit:</Form.Label>
            {/* Amount */}
            <Form.Control
              type="number"
              placeholder="Amount ($)"
              onChange={(e) =>
                handleChange("Increased Deposit Amount", e.target.value)
              }
              value={formData["Increased Deposit Amount"]}
            />
            {/* Timeline */}
            <Form.Label>Within how many days after acceptance?</Form.Label>
            <Form.Control
              type="number"
              placeholder="Days"
              onChange={(e) =>
                handleChange("Increased Deposit Days", e.target.value)
              }
              value={formData["Increased Deposit Days"]}
            />
            <Form.Text>Days</Form.Text>
            {/* Or specific date */}
            <Form.Label>Or specify a specific date:</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) =>
                handleChange("Increased Deposit Date", e.target.value)
              }
              value={formData["Increased Deposit Date"]}
            />
          </Form.Group>
        );
      case 22:
        return (
          <Form.Group controlId="allCashOffer" className="mb-5">
            <Form.Label>C. All Cash Offer:</Form.Label>
            {/* Verification */}
            <Form.Check
              type="radio"
              label="Written verification of sufficient funds is attached to this offer?"
              onChange={() =>
                handleChange("All Cash Offer Verification", "Attached")
              }
              checked={formData["All Cash Offer Verification"] === "Attached"}
            />
            <Form.Check
              type="radio"
              label="Or Buyer shall deliver verification within 3 business days after Acceptance."
              onChange={() =>
                handleChange(
                  "All Cash Offer Verification",
                  "Deliver within 3 days"
                )
              }
              checked={
                formData["All Cash Offer Verification"] ===
                "Deliver within 3 days"
              }
            />
            <Form.Check
              type="radio"
              label="Or Buyer shall deliver verification within specific amount of days after Acceptance."
              onChange={() =>
                handleChange(
                  "All Cash Offer Verification",
                  "Deliver within specific days"
                )
              }
              checked={
                formData["All Cash Offer Verification"] ===
                "Deliver within specific days"
              }
            />
          </Form.Group>
        );
      case 23:
        return (
          <Form.Group controlId="loans" className="mb-5">
            <Form.Label>D. Loan(s):</Form.Label>
            {/* First Loan */}
            <Form.Group controlId="firstLoan" className="mb-3">
              <Form.Label>(1) First Loan:</Form.Label>
              {/* Amount */}
              <Form.Control
                type="number"
                placeholder="Amount ($)"
                onChange={(e) =>
                  handleChange("First Loan Amount", e.target.value)
                }
                value={formData["First Loan Amount"]}
              />
              {/* Type */}
              <Form.Control
                as="select"
                onChange={(e) =>
                  handleChange("First Loan Type", e.target.value)
                }
                value={formData["First Loan Type"]}
              >
                <option>Select Type</option>
                <option>Conventional Financing</option>
                <option>FHA</option>
                <option>VA</option>
                <option>Seller Financing(C.A.R. Form SFA)</option>
                <option>Assumed Financing(C.A.R. Form SFA)</option>
                <option>Other</option>
              </Form.Control>
              {/* Rate */}
              <Form.Control
                type="number"
                placeholder="Rate (%)"
                onChange={(e) =>
                  handleChange("First Loan Rate", e.target.value)
                }
                value={formData["First Loan Rate"]}
              />
              {/* Points */}
              <Form.Control
                type="number"
                placeholder="Points (%)"
                onChange={(e) =>
                  handleChange("First Loan Points", e.target.value)
                }
                value={formData["First Loan Points"]}
              />
            </Form.Group>
            {/* Second Loan */}
            <Form.Group controlId="secondLoan" className="mb-3">
              <Form.Label>(2) Second Loan:</Form.Label>
              {/* Amount */}
              <Form.Control
                type="number"
                placeholder="Amount ($)"
                onChange={(e) =>
                  handleChange("Second Loan Amount", e.target.value)
                }
                value={formData["Second Loan Amount"]}
              />
              {/* Type */}
              <Form.Control
                as="select"
                onChange={(e) =>
                  handleChange("Second Loan Type", e.target.value)
                }
                value={formData["Second Loan Type"]}
              >
                <option>Select Type</option>
                <option>Conventional Financing</option>
                <option>Seller Financing(C.A.R. Form SFA)</option>
                <option>Assumed Financing(C.A.R. Form SFA)</option>
                <option>Other</option>
              </Form.Control>
              {/* Rate */}
              <Form.Control
                type="number"
                placeholder="Rate (%)"
                onChange={(e) =>
                  handleChange("Second Loan Rate", e.target.value)
                }
                value={formData["Second Loan Rate"]}
              />
              {/* Points */}
              <Form.Control
                type="number"
                placeholder="Points (%)"
                onChange={(e) =>
                  handleChange("Second Loan Points", e.target.value)
                }
                value={formData["Second Loan Points"]}
              />
            </Form.Group>
            {/* FHA/VA */}
            <Form.Group controlId="fhaVa" className="mb-3">
              <Form.Label>FHA/VA:</Form.Label>
              {/* Repair Notice Days */}
              <Form.Control
                type="number"
                placeholder="Repair Notice Days"
                onChange={(e) =>
                  handleChange("FHA/VA Repair Notice Days", e.target.value)
                }
                value={formData["FHA/VA Repair Notice Days"]}
              />
              <Form.Text>
                Days after Acceptance to deliver written notice.
              </Form.Text>
            </Form.Group>
            {/* Balance of Down Payment */}
            <Form.Group controlId="balanceOfDownPayment" className="mb-3">
              <Form.Label>Balance of Down Payment:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Amount ($)"
                onChange={(e) =>
                  handleChange("Balance of Down Payment Amount", e.target.value)
                }
                value={formData["Balance of Down Payment Amount"]}
              />
            </Form.Group>
          </Form.Group>
        );

      default:
        return null;
    }
  };

  const totalSteps = 24;

  return (
    <Container>
      <Row className="mt-5 py-4">
        <h2 style={{ textAlign: "center", color: "rgb(84, 92, 129)" }}>
          Let's complete the Real Property Purchase Agreement!
        </h2>

        <Form className="form-container" onSubmit={handleSubmit}>
          {renderFormStep()}
          <Row className="mt-1">
            <Col>
              <Button
                disabled={step === 1}
                onClick={handleBack}
                style={{ marginRight: "10px" }}
              >
                Back
              </Button>
              {step < totalSteps && <Button onClick={handleNext}>Next</Button>}
              {step === totalSteps && <Button type="submit">Submit</Button>}
              <Button onClick={generatePDF} style={{ marginLeft: "15px" }}>
                Download
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default CarRPAForm;
