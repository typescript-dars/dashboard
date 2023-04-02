import { useEffect, useRef, useState } from "react";
import "../style/components/Overview.scss";
import "../style/components/Agents.scss";
import { fullApi } from "../api/api";

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Agents = () => {
  const [data, setdata] = useState<IData[]>();
  const first = useRef<any>();

  useEffect(() => {
    fullApi
      .getPost("posts")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let a: number = first.current.offsetTop;
    let b: number = window.innerHeight;
    let c = b - a - 40;
    first.current.style.height = `${c}px`;
  });

  return (
    <>
      <div className="Overview">
        <div className="add">
          <h2>Agents</h2>
          <button>add</button>
        </div>
      </div>
      <div className="agents mt-5" ref={first}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: IData) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Agents;
