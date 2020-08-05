import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__journal-entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://walyou.com/wp-content/uploads/2011/04/twitter-icons-buttons-35.jpg)",
        }}
      ></div>

      <div className="journal__enrty-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Exercitation duis amet deserunt nulla occaecat velit nisi adipisicing
          occaecat irure eu cupidatat enim.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
