import React, { ReactElement } from 'react';
import { Redirect } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function docsRedirect(): ReactElement {
  const context = useDocusaurusContext();
  const { siteConfig } = context;

  return <Redirect to={`${siteConfig.baseUrl}docs/overview`} />;
}

export { docsRedirect };
