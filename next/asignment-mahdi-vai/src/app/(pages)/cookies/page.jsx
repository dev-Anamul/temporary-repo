"use client";
import React from "react";
import { useRouter } from "next/navigation";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4`,
  TdStyle: `border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark`,
  TdButton: `inline-block px-6 py-2 border rounded border-primary text-primary hover:bg-primary hover:text-white`,
};

const initialState = {
  name: "",
  value: "",
};

function Cookie() {
  const [cookie, setCookie] = React.useState([]);
  const [formData, setFormData] = React.useState(initialState);

  const router = useRouter();

  React.useEffect(() => {
    fetch("http://localhost:3000/api/cookie/get")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const { cookies: resCookie } = data;
          setCookie(resCookie);
        }
        console.log(data);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/cookie/set", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const { cookie: resCookie } = data;
          setCookie((prev) => [...prev, resCookie]);
          setFormData(initialState);
        }
      });
  };

  return (
    <div className="grid grid-cols-2 justify-center items-center">
      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Cookie Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="cookie name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Cookie Value
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="cookie value"
                value={formData.value}
                onChange={(e) =>
                  setFormData({ ...formData, value: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Set Cookie
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => router.refresh()}
              >
                Get Cookie
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-100">
        <div className="w-100">
          <table className="border-collapse border border-slate-500 ...">
            <thead>
              <tr>
                <th className="border border-slate-600 ...">Name</th>
                <th className="border border-slate-600 ...">Value</th>
              </tr>
            </thead>
            <tbody>
              {cookie?.map((item, i) => (
                <tr key={i}>
                  <td className="border border-slate-700 ...">{item.name}</td>
                  <td className="border border-slate-700 ...">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cookie;
