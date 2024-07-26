// Copyright Contributors to the Packit project.
// SPDX-License-Identifier: MIT

import React from "react";
import {
  PageSection,
  PageSectionVariants,
  Text,
  Tabs,
  Tab,
  Title,
  TabTitleText,
  Card,
  CardBody,
  TextContent,
  Label,
} from "@patternfly/react-core";

import { PullRequestList } from "../../app/Projects/PullRequestList";
import { BranchList } from "../../app/Projects/BranchList";
import { IssuesList } from "../../app/Projects/IssuesList";
import { ReleasesList } from "../../app/Projects/ReleasesList";
import { ErrorConnection } from "../errors/ErrorConnection";
import { Preloader } from "../Preloader";
import { ForgeIcon } from "../../app/Forge/ForgeIcon";

import { ExternalLinkAltIcon } from "@patternfly/react-icons";
import { useTitle } from "../../app/utils/useTitle";
import { useQuery } from "@tanstack/react-query";

export const ProjectInfo = () => {
  useTitle("Project");
  const { forge, namespace, repoName } = useParams();

  // TODO: Change tabs around so we can update URL instead with Outlet
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const handleTabClick = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string,
  ) => {
    setActiveTabKey(eventKey);
  };

  const URL = `${
    import.meta.env.VITE_API_URL
  }/projects/${forge}/${namespace}/${repoName}`;

  let content = <Preloader />;
  if (data && "error" in data) {
    content = (
      <Title headingLevel="h1" size="lg">
        Not Found.
      </Title>
    );
  } else if (!isInitialLoading && repoName && namespace && forge) {
    content = (
      <Tabs
        isFilled
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        isBox={true}
      >
        <Tab eventKey={0} title={<TabTitleText>PRs Handled</TabTitleText>}>
          <PullRequestList
            repoName={repoName}
            namespace={namespace}
            forge={forge}
          />
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Releases Handled</TabTitleText>}>
          <ReleasesList
            repoName={repoName}
            namespace={namespace}
            forge={forge}
          />
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Branches Handled</TabTitleText>}>
          <BranchList repoName={repoName} namespace={namespace} forge={forge} />
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Issues Handled</TabTitleText>}>
          <IssuesList repoName={repoName} namespace={namespace} forge={forge} />
        </Tab>
      </Tabs>
    );
  }

  // TODO: Project URL from response?
  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">{`${namespace}/${repoName}`}</Text>
          <Text component="p">
            <Label
              color="blue"
              icon={data && <ForgeIcon url={data.project_url} />}
            >
              {forge}
            </Label>
            <span style={{ marginLeft: "10px" }}>
              {data && <ProjectLink link={data.project_url} />}
            </span>
          </Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Card>
          <CardBody>{content}</CardBody>
        </Card>
      </PageSection>
    </>
  );
};

interface ProjectLinkProps {
  link: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = (props) => {
  if (props.link === "") {
    return <></>;
  }
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <ExternalLinkAltIcon />
    </a>
  );
};
