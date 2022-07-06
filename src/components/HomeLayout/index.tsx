import React from "react";
import CardWithImage, {
  CardWithImageProps,
} from "@site/src/components/CardWithImage";
import Layout from "@theme/Layout";
import { useThemeConfig } from "@docusaurus/theme-common";
import { ThemeConfig } from "@docusaurus/preset-classic";

import Button from "../Button";
import LinkButton from "./LinkButton";
import SocialProfiles from "./SocialProfiles";
import Dashboards from "./Dashboards";
import Containers from "./Containers";
import Tools from "./Tools";
import Notes from "./Notes";

export interface HomeLayoutProps {
  description: string;
  title: string;
  tagline: string;
}

export interface HomeLayoutConfig extends ThemeConfig {
  cards: CardWithImageProps[];
}

export default function HomeLayout({
  description,
  title,
  tagline,
}: HomeLayoutProps) {
  const { cards } = useThemeConfig() as HomeLayoutConfig;

  return (
    <Layout description={description}>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h1 className="hero__title margin--none">{title}</h1>
            <p className="hero__subtitle margin--none">{tagline}</p>
          </div>
          {false && cards && (
            <div className="row">
              {cards.map((props, idx) => (
                <CardWithImage key={idx} {...props} />
              ))}
            </div>
          )}
          <div className="row">
            <div className="col col--2">
              <SocialProfiles />
            </div>
            <div className="col col--2">
              <Dashboards />
            </div>
            <div className="col col--2">
              <Containers />
            </div>
            <div className="col col--2">
              <Tools />
            </div>
            <div className="col col--2">
              <Notes />
            </div>
            <div className="col col--2">
              <div className="col-demo">Remarks</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
