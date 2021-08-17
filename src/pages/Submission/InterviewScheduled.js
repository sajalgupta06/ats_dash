import React from 'react'
import "./Submission.scss";
import {
  CheckboxIcon,
  DownArrIcon,
  Filter2Icon,
  FilterIcon,
} from "../../asserts/icons";
import InterviewScheduledTable from '../../components/Table/InterviewScheduledTable';

export default function InterviewScheduled({ view, setView }) {
    return (
        <div>
             
      <InterviewScheduledTable></InterviewScheduledTable>
        </div>
    )
}
