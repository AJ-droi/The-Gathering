import React, { useEffect, useState } from "react";
import notification from "../../assets/notification.png";
import { useDispatch, useSelector } from "react-redux";
import { notifications } from "../../redux/actions";
import { Link } from "react-router-dom";

const DashboardNotifications = () => {
  const role = localStorage.getItem("role");
  const notify = useSelector((state: any) => state.notifications.notifications);

  const dispatch = useDispatch() as unknown as any;

  useEffect(() => {
    {
      dispatch(notifications());
    }
  });

  const [page, setPage] = useState(1);

  const NoOfItems = 7;
  const lastIndex = page * NoOfItems;
  const firstIndex = lastIndex - NoOfItems;

  const adminNotify = notify?.filter(
    (items: any, id: number) => items.recipient === "admin"
  );
  const allNotify = notify?.filter(
    (items: any, id: number) => items.recipient === "all"
  );

  console.log(notify);
  console.log(allNotify);

  const allItems = allNotify?.slice(firstIndex, lastIndex);
  const adminItems = adminNotify?.slice(firstIndex, lastIndex);

  const prev = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
  };

  const allnext = () => {
    if (allItems.length / NoOfItems >= 1) {
      setPage(page + 1);
    }
  };

  const adminnext = () => {
    if (adminItems.length / NoOfItems >= 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pt-[10%]">
      <div className="flex justify-end px-[5%]">
        <img src={notification} alt="" />
      </div>
      {role === "admin" || role === "superadmin" ? (
        <>
          {adminItems?.map((elem: any, id: number) => (
            <Link to="/dashboard/event">
              <div className="px-[5%]">
                <p className="text-left  py-[2%]">{elem.message}</p>
                <div className="bg-[#F2F2F2] h-[0.2rem]"> </div>
              </div>
            </Link>
          ))}

          <PaginationBar prev={prev} next={adminnext} page={page} />
        </>
      ) : (
        <>
          {allItems?.map((elem: any, id: number) => (
            <Link to="/dashboard/event">
              <div className="px-[5%]">
                <p className="text-left  py-[2%]">{elem.message}</p>
                <div className="bg-[#F2F2F2] h-[0.2rem]"> </div>
              </div>
            </Link>
          ))}

          <PaginationBar prev={prev} next={allnext} page={page} />
        </>
      )}
    </div>
  );
};

export const PaginationBar = ({ prev, next, page }: any) => {
  return (
    <div className="flex items-center my-[5%] bg-[#F7F7F7] px-[3%] py-[2%] mx-[4%] rounded-md">
      <p className="text-[#9F9F9F]" onClick={prev}>
        Previous Page
      </p>
      <div className="flex w-[50%] justify-center">
        <p className="bg-[##C2C2C2] text-[#4C4C4C] w-[5%] px-[4%] py-[2%] flex justify-center rounded-[50%] bg-[#E6E6E6] mx-[2%]">
          {" "}
          {page}
        </p>
      </div>
      <p className="text-[#4C4C4C]" onClick={next}>
        Next Page
      </p>
    </div>
  );
};

export default DashboardNotifications;
