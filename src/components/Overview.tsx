import React, { useEffect, useRef, useState } from "react";
import "../style/components/Overview.scss";
import "../style/components/Agents.scss";
import { IPerson, Person } from "../api/Person";

const Overview = () => {
  const [data, setdata] = useState<IPerson[]>([]);
  const [img, setimg] = useState<any>();
  const first = useRef<any>();
  const imgUpload = (v: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) setimg(reader.result);
    };
    reader.readAsDataURL(v.target.files[0]);
  };
  const getData = (e: any) => {
    e.preventDefault();

    let dataOne = new Person(
      e.target.fullname.value,
      img,
      e.target.date.value,
      e.target.number.value
    );
    setdata([...data, dataOne]);
    e.target.reset();
  };
  useEffect(() => {
    let a: number = first.current.offsetTop;
    let b: number = window.innerHeight;
    let c = b - a - 40;
    first.current.style.height = `${c}px`;
  });
  return (
    <div className="Overview">
      <div className="add">
        <h2>Overview</h2>
        <button>add</button>
      </div>
      <form onSubmit={getData} className="from">
        <input
          className="form-control"
          type="text"
          name="fullname"
          id=""
          placeholder="full name"
          required
        />
        <input
          className="form-control"
          type="file"
          accept=".jpg, .jpeg, .png, .svg"
          onChange={imgUpload}
          name="file"
          id=""
          required
        />
        <input
          className="form-control"
          type="date"
          name="date"
          id=""
          required
        />
        <input
          className="form-control"
          type="tel"
          name="number"
          id=""
          placeholder="telphone number"
          required
        />
        <button className="btn btn-success w-100" type="submit">
          add
        </button>
      </form>
      <div className="agents mt-3" ref={first}>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Owner</td>
              <td>date</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((v) => (
              <tr key={v.id}>
                <td>
                  <div className="img">
                    <img src={v.file} alt="" />
                    {v.fullname}
                  </div>
                </td>
                <td>{v.date}</td>
                <td>{v.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
