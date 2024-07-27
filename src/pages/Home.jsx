import React, { useEffect } from "react";

export const Home = () => {
  const [myData, setNyData] = useState(null);
  useEffect(() => {
    const getData = async (values) => {
      try {
        const res = await axios.post("/api/info", values);

        if (res.data.success) {
          toast.success(res.data.message);
          setNyData(res.data.data);
          localStorage.getItem("token");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message || "Server error");
        } else if (error.request) {
          toast.error("No response from server");
        } else {
          toast.error("Error setting up request");
        }
      }
    };

    getData();
  }, []);

  return <div>[myData]</div>;
};
