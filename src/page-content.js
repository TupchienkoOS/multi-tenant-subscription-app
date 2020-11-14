import React from "react";

export const PageContent = () => {
  return (
    <div className="wrapper wrapper-content">
      <div className="row animated fadeInRight">
        <div className="col-md-4">
          <div className="ibox ">
            <div className="ibox-title">
              <h5>Profile Detail</h5>
            </div>
            <div>
              <div className="ibox-content no-padding border-left-right">
                <img
                  alt="image"
                  className="./img-fluid"
                  src="./img/profile_big.jpg"
                ></img>
              </div>
              <div className="ibox-content profile-content">
                <h4>
                  <strong>Monica Smith</strong>
                </h4>
                <p>
                  <i className="fa fa-map-marker"></i> Riviera State 32/106
                </p>
                <h5>About me</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitat.
                </p>
                <div className="row m-t-lg">
                  <div className="col-md-4">
                    <span className="bar">5,3,9,6,5,9,7,3,5,2</span>
                    <h5>
                      <strong>169</strong> Posts
                    </h5>
                  </div>
                  <div className="col-md-4">
                    <span className="line">5,3,9,6,5,9,7,3,5,2</span>
                    <h5>
                      <strong>28</strong> Following
                    </h5>
                  </div>
                  <div className="col-md-4">
                    <span className="bar">5,3,2,-1,-3,-2,2,3,5,2</span>
                    <h5>
                      <strong>240</strong> Followers
                    </h5>
                  </div>
                </div>
                <div className="user-button">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm btn-block"
                      >
                        <i className="fa fa-envelope"></i> Send Message
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-default btn-sm btn-block"
                      >
                        <i className="fa fa-coffee"></i> Buy a coffee
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="ibox ">
            <div className="ibox-title">
              <h5>Activites</h5>
              <div className="ibox-tools">
                <a className="collapse-link">
                  <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                  <li>
                    <a href="#" className="dropdown-item">
                      Config option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Config option 2
                    </a>
                  </li>
                </ul>
                <a className="close-link">
                  <i className="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div className="ibox-content">
              <div>
                <div className="feed-activity-list">
                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/a1.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right text-navy">1m ago</small>
                      <strong>Sandra Momot</strong> started following{" "}
                      <strong>Monica Smith</strong>. <br></br>
                      <small className="text-muted">
                        Today 4:21 pm - 12.06.2014
                      </small>
                      <div className="actions">
                        <a href="" className="btn btn-xs btn-white">
                          <i className="fa fa-thumbs-up"></i> Like{" "}
                        </a>
                        <a href="" className="btn btn-xs btn-danger">
                          <i className="fa fa-heart"></i> Love
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/profile.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right">5m ago</small>
                      <strong>Monica Smith</strong> posted a new blog. <br></br>
                      <small className="text-muted">
                        Today 5:60 pm - 12.06.2014
                      </small>
                    </div>
                  </div>

                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/a2.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right">2h ago</small>
                      <strong>Mark Johnson</strong> posted message on{" "}
                      <strong>Monica Smith</strong> site. <br></br>
                      <small className="text-muted">
                        Today 2:10 pm - 12.06.2014
                      </small>
                      <div className="well">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                        Over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                      </div>
                      <div className="float-right">
                        <a href="" className="btn btn-xs btn-white">
                          <i className="fa fa-thumbs-up"></i> Like{" "}
                        </a>
                        <a href="" className="btn btn-xs btn-white">
                          <i className="fa fa-heart"></i> Love
                        </a>
                        <a href="" className="btn btn-xs btn-primary">
                          <i className="fa fa-pencil"></i> Message
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/a3.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right">2h ago</small>
                      <strong>Janet Rosowski</strong> add 1 photo on{" "}
                      <strong>Monica Smith</strong>. <br></br>
                      <small className="text-muted">2 days ago at 8:30am</small>
                      <div className="photos">
                        <a
                          target="_blank"
                          href="http://24.media.tumblr.com/20a9c501846f50c1271210639987000f/tumblr_n4vje69pJm1st5lhmo1_1280.jpg"
                        >
                          {" "}
                          <img
                            alt="image"
                            className="feed-photo"
                            src="./img/p1.jpg"
                          ></img>
                        </a>
                        <a
                          target="_blank"
                          href="http://37.media.tumblr.com/9afe602b3e624aff6681b0b51f5a062b/tumblr_n4ef69szs71st5lhmo1_1280.jpg"
                        >
                          {" "}
                          <img
                            alt="image"
                            className="feed-photo"
                            src="./img/p3.jpg"
                          ></img>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/a4.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right text-navy">5h ago</small>
                      <strong>Chris Johnatan Overtunk</strong> started following{" "}
                      <strong>Monica Smith</strong>. <br></br>
                      <small className="text-muted">
                        Yesterday 1:21 pm - 11.06.2014
                      </small>
                      <div className="actions">
                        <a href="" className="btn btn-xs btn-white">
                          <i className="fa fa-thumbs-up"></i> Like{" "}
                        </a>
                        <a href="" className="btn btn-xs btn-white">
                          <i className="fa fa-heart"></i> Love
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/a5.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right">2h ago</small>
                      <strong>Kim Smith</strong> posted message on{" "}
                      <strong>Monica Smith</strong> site. <br></br>
                      <small className="text-muted">
                        Yesterday 5:20 pm - 12.06.2014
                      </small>
                      <div className="well">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                        Over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                      </div>
                      <div className="float-right">
                        <a href="" className="btn btn-xs btn-white">
                          <i className="fa fa-thumbs-up"></i> Like{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/profile.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right">23h ago</small>
                      <strong>Monica Smith</strong> love{" "}
                      <strong>Kim Smith</strong>. <br></br>
                      <small className="text-muted">
                        2 days ago at 2:30 am - 11.06.2014
                      </small>
                    </div>
                  </div>
                  <div className="feed-element">
                    <a href="#" className="float-left">
                      <img
                        alt="image"
                        className="rounded-circle"
                        src="./img/a7.jpg"
                      ></img>
                    </a>
                    <div className="media-body ">
                      <small className="float-right">46h ago</small>
                      <strong>Mike Loreipsum</strong> started following{" "}
                      <strong>Monica Smith</strong>. <br></br>
                      <small className="text-muted">
                        3 days ago at 7:58 pm - 10.06.2014
                      </small>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary btn-block m">
                  <i className="fa fa-arrow-down"></i> Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
