import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import store from "../../store";
import { getWorkspaceUrlBegin } from "../../actions/getWorkSpaceUrl";

const WorkspaceUrl = props => {
  const { history } = props;
  const formik = useFormik({
    initialValues: {
      domain: ""
    },
    onSubmit: values => {
      store.dispatch(getWorkspaceUrlBegin(values, history));
      formik.handleReset();
    }
  });

  return (
    <div className="workSpace col-12">
      <div className="card col-8">
        <h1>Sign in to your workspace</h1>
        <form className="formWrap col-8" onSubmit={formik.handleSubmit}>
          <p className="labelTitle">Enter your workspace’s Slack URL.</p>
          <div className="formControl">
            <div className="inputWrap">
              <input
                className="inputBoxDomain"
                type="text"
                name="domain"
                onChange={formik.handleChange}
                defaultValue={formik.values.email}
                placeholder="your-workspace-url"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                required
              />
              <span>.slack.com</span>
            </div>
            <button className="btn large fullWidth" type="submit">
              Continue
            </button>
            <p className="signInBottomTxt">
              Don’t know your workspace URL?{" "}
              <NavLink className="link" to="/">
                Find your workspace
              </NavLink>
            </p>
          </div>
        </form>
      </div>
      <p>Need to get your group started on Slack? Create a new workspace</p>
    </div>
  );
};

export default WorkspaceUrl;
