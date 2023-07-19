import "./main.css";
const Main = () => {
  return (
    <div className="container__main">
      <div className="cards">
        <div className="card">
          <div className="title">
            <span>Unresolved</span>
          </div>
          <div className="headin">
            <h1>60</h1>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <span>Overdue</span>
          </div>
          <div className="headin">
            <h1>16</h1>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <span>Open</span>
          </div>
          <div className="headin">
            <h1>
              <h1>43</h1>
            </h1>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <span>On hold</span>
          </div>
          <div className="headin">
            <h1>64</h1>
          </div>
        </div>
      </div>
      <div className="main__middles">
        <div className="main__middle">
          <div className="middle__left">
            <h3 className="left__title">Today’s trends</h3>
            <span className="left__content">as of 25 May 2019, 09:41 PM</span>
          </div>
          <div className="middle__right">
            <div className="right__middle1">Today</div>
            <div className="right__middle2">Yesterday</div>
          </div>
        </div>
        <div className="middle__cards">
          <div className="mid__card">
            <span className="span__mid">Resolved</span>
            <h1 className="headings__mid">449</h1>
          </div>

          <div className="mid__card">
            <span className="span__mid">Resolved</span>
            <h1 className="headings__mid">426</h1>
          </div>

          <div className="mid__card">
            <span className="span__mid">Average first response time</span>
            <h1 className="headings__mid">33m</h1>
          </div>

          <div className="mid__card">
            <span className="span__mid">Average response time</span>
            <h1 className="headings__mid">3h 8m</h1>
          </div>

          <div className="mid__card">
            <span className="span__mid">Resolution within SLA</span>
            <h1 className="headings__mid">94%</h1>
          </div>
        </div>
      </div>
      <div className="main__finished">
        <div className="section">
          <div className="section__left">
            <div className="section__navigation">
              <div className="container__support">
                <div className="headin2__h">
                  <h1>Unresolved tickets</h1>
                </div>
                <span className="spans__sup">
                  Group: <h6>Support</h6>
                </span>
                <h6 className="heading__titles">Waiting on Feature Request</h6>
                <h6 className="heading__titles">Awaiting Customer Response</h6>
                <h6 className="heading__titles">Awaiting Developer Fix</h6>
                <h6 className="heading__titles">Pending</h6>
              </div>
              <div className="details">
                <span className="view">View details</span>
                <div className="numbers">
                  <h5 className="number">4238</h5>
                  <h5 className="number1">1005</h5>
                  <h5 className="number1">905</h5>
                  <h5 className="number1">281</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="section__right">
            <div className="section__navigation">
              <div className="container__support">
                <div className="headin2__h">
                  <h1>Unresolved tickets</h1>
                </div>
                <span className="spans__sup">
                  Group: <h6>Support</h6>
                </span>
                <h6 className="heading__titles">Waiting on Feature Request</h6>
                <h6 className="heading__titles">Awaiting Customer Response</h6>
                <h6 className="heading__titles">Awaiting Developer Fix</h6>
                <h6 className="heading__titles">Pending</h6>
              </div>
              <div className="details">
                <span className="view">View details</span>
                <div className="numbers">
                  <h5 className="number">4238</h5>
                  <h5 className="number1">1005</h5>
                  <h5 className="number1">905</h5>
                  <h5 className="number1">281</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
