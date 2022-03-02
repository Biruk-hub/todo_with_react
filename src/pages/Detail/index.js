import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBack, IoCalendar, IoTime } from "react-icons/io5";
import PageWrapper from "../../components/page_wrapper";
import Heading from "../../components/heading";
import Text from "../../components/text";
import { LocalContext } from "../../provider/Local";

const Detail = () => {
  const { task, setTaskData } = useContext(LocalContext);
  const { id } = useParams();
  const taskItem = task[id];
  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div className="w-100 ">
          {/* back link */}
          <div className="w-fit">
            <Link to="/">
              <div className="flex justify-center items-center space-x-2 text-gray-700 rounded-md border-2 border-gray-500 w-fit px-2 hover:underline hover:border-blue-500 hover:text-black">
                <IoArrowBack className="w-5 h-5" />
                <p className="text-lg  ">Back</p>
              </div>
            </Link>
          </div>
          {
            taskItem ? (
          <div className="w-ful mt-5">
            {/* header container */}
            <div className="">
              <Heading primary={true} size="2xl">
                {taskItem.title}
              </Heading>
              {/* date and time wrapper */}
              <div className="my-2 flex justify-start items-center space-x-4">
                {/* date */}
                <div className="flex justify-center items-center w-fit px-2 space-x-2 text-gray-800 bg-blue-200 rounded-md">
                  <IoCalendar className="w-5 h-5" />
                  <p>1 Jan 2022</p>
                </div>
                {/* time */}
                <div className="flex justify-center items-center w-fit px-2 space-x-2 text-gray-800 bg-blue-200 rounded-md">
                  <IoTime className="w-5 h-5" />
                  <p>12:30 pm</p>
                </div>
              </div>
            </div>
            {/* Description container */}
            <div className="mt-8">
              <Heading secondary={true} size="lg">
                description
              </Heading>
              <Text primary={true} size="xl">
                {taskItem.description}
              </Text>
            </div>
          </div> ) : (
            <div className="flex justify-center m-6 bg-gray-100 p-5 rounded">Task not found</div>
          )
          }
        </div>
      </div>
    </PageWrapper>
  );
};

export default Detail;
