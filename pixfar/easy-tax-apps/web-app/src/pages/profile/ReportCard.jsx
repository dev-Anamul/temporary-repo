import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetFiscalYearsQuery } from "../../features/fiscal-year/fiscal-year-api";
import { reportApi } from "../../features/report/report-api";
import ReportItem from "./ReportItem";

function ReportCard({ title, type }) {
  const { data: fiscalYears } = useGetFiscalYearsQuery();

  const params = useParams() || {};

  const dispatch = useDispatch();

  const currentYearHandler = (type) => {
    if (type === "statement") {
      dispatch(
        reportApi.endpoints.getFinancialReport.initiate({ userId: params?.id })
      )
        .unwrap()
        .then((res) => {
          console.log(res);
          window.open(encodeURI(res?.file), "_blank");
          // window.location.href = encodeURI(res?.file);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (type === "summary") {
      dispatch(
        reportApi.endpoints.getExpenseSummaries.initiate({ userId: params?.id })
      )
        .unwrap()
        .then((res) => {
          console.log(res);
          window.open(encodeURI(res?.file), "_blank");
          //   window.location.href = encodeURI(res?.file);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handlerFunc = (id, type) => {
    console.log(id, type);
    if (type === "statement") {
      return dispatch(
        reportApi.endpoints.getFinancialReport.initiate({
          userId: params?.id,
          fiscalId: id,
        })
      )
        .unwrap()
        .then((res) => {
          console.log(res);
          window.open(encodeURI(res?.file), "_blank");
          //   window.location.href = encodeURI(res?.file);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (type === "summary") {
      return dispatch(
        reportApi.endpoints.getExpenseSummaries.initiate({
          userId: params?.id,
          fiscalId: id,
        })
      )
        .unwrap()
        .then((res) => {
          console.log(res);
          window.open(encodeURI(res?.file), "_blank");
          //   window.location.href = encodeURI(res?.file);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <h1 className="text-xl font-poppins text-black dark:text-white mb-2">
        {title}
      </h1>
      <div className="border border-gray-600 px-5 py-3">
        <ReportItem
          title="Current financial year"
          clickHandler={() => currentYearHandler(type)}
        />

        {fiscalYears?.data?.map((fiscalYear) => (
          <ReportItem
            key={fiscalYear._id}
            title={`${title} for ${fiscalYear.fiscalYear}`}
            clickHandler={() => handlerFunc(fiscalYear._id, type)}
          />
        ))}
      </div>
    </>
  );
}

// prop types for ReportCard
ReportCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default ReportCard;
