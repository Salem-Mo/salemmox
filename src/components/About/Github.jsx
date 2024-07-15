import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

function Github() {
  const [weeksNum, setWeeksNum] = useState(356);
  const isExtraSmall = useMediaQuery({ query: '(max-width: 576px)' });
  const isSmall = useMediaQuery({ query: '(min-width: 577px) and (max-width: 768px)' });
  const isMedium = useMediaQuery({ query: '(min-width: 769px) and (max-width: 992px)' });
  const isLarge = useMediaQuery({ query: '(min-width: 993px) and (max-width: 1200px)' });
  const isExtraLarge = useMediaQuery({ query: '(min-width: 1201px)' });

  useEffect(() => {
    if (isExtraSmall) {
      setWeeksNum(112); 
    } else if (isSmall) {
      setWeeksNum(175);
    } else if (isMedium) {
      setWeeksNum(225);
    } else if (isLarge) {
      setWeeksNum(290);
    } else if (isExtraLarge) {
      setWeeksNum(365);
    }
  }, [isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge]);

  const transformData = (contributions) => {
    // contributions are grouped by week, so slicing the last 'weeksNum' weeks
    return contributions.slice(-weeksNum);
  };

  return (
    <Row className="calendar-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Salem-Mo"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        transformData={transformData} // Pass the function, not weeksNum
      />
    </Row>
  );
}

export default Github;
