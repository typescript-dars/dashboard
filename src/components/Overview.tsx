import React from "react";
import "../style/components/Overview.scss";

const Overview = () => {
  return (
    <div className="Overview">
      <div className="add">
        <h2>Overview</h2>
        <button>add</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Owner</td>
            <td>End date</td>
            <td>Profits</td>
            <td>Losses</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="img">
                <img
                  src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ys5jqwvg6pgtpacb5kqb/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg"
                  alt=""
                />
                Owner
              </div>
            </td>
            <td>End date</td>
            <td>Profits</td>
            <td>Losses</td>
            <td>Phone</td>
          </tr>
          <tr>
            <td className="img">
              <img
                src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ys5jqwvg6pgtpacb5kqb/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg"
                alt=""
              />
              Owner
            </td>
            <td>End date</td>
            <td>Profits</td>
            <td>Losses</td>
            <td>Phone</td>
          </tr>
          <tr>
            <td className="img">
              <img
                src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ys5jqwvg6pgtpacb5kqb/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg"
                alt=""
              />
              Owner
            </td>
            <td>End date</td>
            <td>Profits</td>
            <td>Losses</td>
            <td>Phone</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
