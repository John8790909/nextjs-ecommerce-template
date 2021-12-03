import { Button, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Product.module.css";
import AddToCart from "../../components/AddToCart";
import products from "../../products.json";

import { useRouter } from "next/router";

export default function product() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <div style={{ flex: "50%" }}>
          <div>
            <div className={styles.smallCard}>
              <img
                className={styles.image}
                src={products[id] ? products[id].image : ""}
                alt={products[id] ? products[id].title : ""}
              />
            </div>
          </div>
          <div className={styles.wrap}>
            {products[id]
              ? products[id].images.map((image, index) => {
                  return (
                    <div className={styles.smallCard} key={index}>
                      <img
                        style={{ width: "100px", height: "100px" }}
                        className={styles.image}
                        src={image}
                        alt={products[id] ? products[id].title : ""}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div style={{ flex: "50%" }} className={styles.card}>
          <div className={styles.subCard}>
            <div>
              <Typography variant="h4">
                {products[id] ? products[id].title : ""}
              </Typography>
              <Typography variant="h5">
                ${products[id] ? products[id].price : ""}
              </Typography>
              <Typography variant="h6">
                {products[id] ? products[id].description : ""}
              </Typography>
            </div>

            <div>
              <AddToCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
