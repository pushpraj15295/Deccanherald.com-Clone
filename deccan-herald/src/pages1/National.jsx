import styles from "./National.module.css";

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const National = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 31ca501b6ce84f2896151e26cc73a627
    // ef816628ed504cd9b5a14971665bfb36
    const API="0262fcb147b7460fa66ab22d917cb183"
    //   axios
    //     .get(
    //       "https://newsapi.org/v2/top-headlines?country=in&apiKey=b4a2302a208d497c84c94fa9944caf08&q=india"
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       setData(response.data.articles);
    //     });
    // }, []);

    if (data.length === 0) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}&q=india`
        )
        .then((response) => {
          console.log(response);

          setData(response.data.articles);
        });
    }
  }, []);

  return (
    <>
      <div  style={{marginLeft:"50px",marginTop:"50px" }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">National</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div style={{ borderBottom: "1px solid rgb(154, 149, 149)",marginLeft:"50px" }}>
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              _selected={{
                color: "white",
                bg: "green.400",
                fontWeight: "bold",
                fontSize: "30px",
                paddingRight: "40px",
              }}
            >
              National
            </Tab>
            <Tab>POLITICS</Tab>
            <Tab>NORTH AND CENTRAL</Tab>
            <Tab>EAST AND NORTHEAST</Tab>
            <Tab> SOUTH</Tab>
            <Tab>WEST</Tab>
          </TabList>
        </Tabs>
      </div>
      <div>
        <button className={styles.National_heading}>NATIONAL</button>
      </div>

   {/* static div start */}
      <div className={styles.National_static1}>
        {/* left imgdiv */}
        <div className={styles.l1div}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/06/16/supreme-court-pti-917580-1605799878-1118592-1655363646.jpg?itok=8cP5HhfM" />
        </div>

               {/*middle img div  */}
        <div className={styles.National_static2}>
          <div className={styles.National_innerdiv}>
            <img
              src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/16/Prayagraj%20pti%20%281%29-1655369276.jpg?itok=6CJhTN3k"
              alt=""
            />
            <p>Equities close in red for 4th day; Sensex drops</p>
          </div>
          <div className={styles.National_innerdiv}>
            <img
              src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/16/capture-1118570-1655362826.png?itok=DwDaSdj7"
              alt=""
            />
            <p>Adani Group fastest in valuation growth at 88%</p>
          </div>
          <div className={styles.National_innerdiv}>
            <img
              src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/06/16/rashtrapati-bhavan-ians-1117496-1655029325-1-1118561-1655358720.jpg?itok=GvaiWQIh"
              alt=""
            />
            <p>Gold marginally higher; silver climbs Rs 304</p>
          </div>
        </div>


        {/* right img div */}
        <div>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/16/covid-pti-news-1118563-1655355828.jpg?itok=M540gKlk" />
        </div>
      </div>

      {/* static div end */}
      <img
        src="https://s0.2mdn.net/simgad/2659264650643740327"
        alt=""
        className={styles.National_adds}
      />

      {/* main div  */}
      <div className={styles.nationalMainDiv}>
      {/* left boot div */}

      <div className={`container ${styles.leftDiv} `}>
        <div className="row">
          {data.map((value, index) => {
            return (
              <div className="col-4" key={index}>
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    margin: "10px",
                    height: "300px",
                    fontSize: "15px",
                  }}
                >
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body" style={{ fontsize: "" }}>
                    <Link to={`/national/${index}`}>
                      {" "}
                      <h5 className="card-title">{value.title}</h5>
                    </Link>
                    {/* <h5 className="card-title" >{value.title}</h5> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* right div  */}
       
      </div>
      {/* right box div */}
      <div className={styles.rightDiv}>
          <div>
            <div className={styles.National_imgdiv}>
              <img
                src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/16/rajbhavan2-1-1118593-1655363458.jpg?itok=16cUder7"
                alt=""
              />
              <h1>Committie drafting State Education Policy Stalin</h1>
              <p>16th Jun 2022</p>
            </div>
            <img
              src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/15/pti05272022000254b-1-1118409-1655303164.jpg?itok=mXZvOMzX"
              alt=""
              className={styles.National_imgdiv}
            />
            <div className={styles.National_imgdiv}>
              <img
                src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/15/protest-istock-1118436-1655310474.jpg?itok=NKW29EUf"
                alt=""
              />
              <h1>
                Jamaat-e-Islami Hind to campaign in WB against 'hatred'....
              </h1>
              <p>15th Jun 2022</p>
            </div>
            <img
              src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/15/iit-madras-pti-1-1113478-1653816063-1-1115806-1654520171-1-1118392-1655299602.jpg?itok=n0vnuQN5"
              alt=""
              className={styles.National_imgdiv}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default National;
