import * as React from 'react';
import {
  makeStyles,
  shorthands,
  Button,
  Caption1,
  Text,
  tokens,
  Subtitle1,
  Badge,
} from '@fluentui/react-components';
import { MoreHorizontal20Regular } from '@fluentui/react-icons';
import { Card, CardHeader, CardPreview } from '@fluentui/react-components';

const useStyles = makeStyles({
  main: {
    ...shorthands.gap('36px'),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  card: {
    width: '360px',
    maxWidth: '100%',
    height: 'fit-content',
  },

  section: {
    width: 'fit-content',
  },

  title: {
    ...shorthands.margin(0, 0, '12px'),
  },

  horizontalCardImage: {
    width: '64px',
    height: '64px',
  },

  headerImage: {
    ...shorthands.borderRadius('4px'),
    maxWidth: '44px',
    maxHeight: '44px',
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: {
    ...shorthands.margin(0),
  },
});

export default () => {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <Card className={styles.card}>
        <div>云效任务</div>
        <div><Badge color="success" /></div>
        <div><Badge color="success" /></div>
      </Card>
    </section>
  );
};
