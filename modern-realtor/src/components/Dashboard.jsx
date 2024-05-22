import { Row, Col, Container } from "react-bootstrap";
import ScatterChart from "./ScatterChart";
const Dashboard = () => {
  const chartData1 = {
    datasets: [
      {
        label: "Time vs. home price",
        data: [
          { x: "2023-05-01", y: 20 },
          { x: "2023-05-02", y: 10 },
          { x: "2023-05-03", y: 30 },
          { x: "2023-05-04", y: 15 },
          { x: "2023-05-05", y: 25 },
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  const chartOptions1 = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          parser: "yyyy-MM-dd",
          unit: "day",
          displayFormats: {
            day: "dd-MM-yyyy",
          },
        },
        title: {
          display: true,
          text: "Date",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      <Container fluid>
        <Row className="mx-5 mt-4">
          <Col md="5" className="chartBox px-4 py-4">
            <ScatterChart data={chartData1} options={chartOptions1} />
          </Col>
          <Col md="5" className="ms-5 chartBox px-4 py-4">
            <ScatterChart data={chartData1} options={chartOptions1} />
          </Col>
          <Col md="5" className="mt-4 chartBox px-4 py-4">
            <ScatterChart data={chartData1} options={chartOptions1} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
