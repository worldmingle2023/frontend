import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

import user1 from "../../../assets/images/backgrounds/chinese.jpg";
import user2 from "../../../assets/images/backgrounds/u5.jpg";
import user3 from "../../../assets/images/backgrounds/chatbot.png";

const blogs = [
  {
    img: user3,
    title: "Start a chat about any culture!",
    subtitle:
      "Click to start chatting with our Culture Guide Chatbot",
    btncolor: "primary",
  },
  {
    img: user2,
    title: "Unique Egyptian traditions",
    subtitle:
      "Hospitality, Holding the wood, Avoid stepping on cut hair...",
    btncolor: "primary",
  },
  {
    img: user1,
    title: "Learn more about Chinese New Year!",
    subtitle:
      "Marked with fireworks, red envelopes (hóngbāo), and dragon dances.",
    btncolor: "primary",
  },
];

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <img src={blog.img} alt="img" width="100%" height="300px" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
