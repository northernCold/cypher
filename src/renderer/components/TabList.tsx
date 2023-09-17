import {
  Field,
  Input,
  makeStyles,
  SelectTabData,
  Button,
  SpinButton,
  SelectTabEvent,
  shorthands,
  Switch,
  Tab,
  TabList,
  TabListProps,
  TabValue,
  tokens,
} from '@fluentui/react-components';
import { useState } from 'react';

const useContainerStyle = makeStyles({
  root: {
    ...shorthands.padding('24px'),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalL,
    maxWidth: '480px',
  },
  actions: {
    display: 'flex',
    columnGap: '16px',
  },

  rounded: {
    ...shorthands.borderRadius('100%'),
    position: 'relative',
    height: '28px',
    width: '28px',
    backgroundColor: '#1677ff',
    color: '#1677ff',
    ...shorthands.borderColor('#1677ff'),
    '&:after': {
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      width: '100%',
      height: '100%',
      color: '#1677ff',
      animationDuration: '1.2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      content: "''",
      ...shorthands.borderWidth('3px'),
      ...shorthands.borderStyle('solod'),
      ...shorthands.borderColor('inherit'),
      ...shorthands.borderRadius('50%'),
      animationName: {
        '0%': {
          transform: 'scale(0.8)',
          opacity: 0.5,
        },
        '100%': {
          transform: 'scale(1.6)',
          opacity: 0,
        },
      }
    },
  },
});

const SettingPanel = () => {
  const styles = useContainerStyle();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [todoList, setTodoList] = useState<boolean>(false);
  const [times, setTimes] = useState<number>(3);
  const [startup, setStartup] = useState<boolean>(false);

  return (
    <div className={styles.form}>
      <Field label="账号">
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Field>
      <Field label="密码">
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      </Field>
      <Field label="是否点击我的全部代表事项">
        <Switch
          checked={todoList}
          onChange={(e) => setTodoList(e.currentTarget.checked)}
        />
      </Field>
      <Field label="全部模块点击几遍">
        <SpinButton
          value={times}
          min={0}
          max={20}
          onChange={(e, data) => setTimes(data.value ?? 3)}
        />
      </Field>
      <Field label="开机自动启动">
        <Switch
          checked={startup}
          onChange={(e) => setStartup(e.target.checked)}
        />
      </Field>
      <div className={styles.actions}>
        <Button appearance="primary">保存</Button>
        <Button>重置</Button>
      </div>
    </div>
  );
};

const DashboardPanel = () => {
  const styles = useContainerStyle();
  const [status, setStatus] = useState<boolean>(false);
  const [excutionStatus, setExcutionStatus] = useState<0 | 1 | 2 | 3>(0); // 未开始 | 执行中 | 成功 | 失败
  const [done, setDone] = useState<boolean>(false);

  return (
    <div className={styles.form}>
      <Field label="存活状态" orientation="horizontal">
        <div className={styles.rounded}></div>
      </Field>
      <Field label="今日是否完成" orientation="horizontal">
        <div className={styles.rounded}></div>
      </Field>
      <Field label="执行结构" orientation="horizontal">
        <div className={styles.rounded}></div>
      </Field>
    </div>
  );
};

export default (props: Partial<TabListProps>) => {
  const [selectedValue, setSelectedValue] = useState<TabValue>('arrivals');
  const styles = useContainerStyle();

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };
  return (
    <div>
      <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
        <Tab id="Arrivals" value="arrivals">
          Arrivals
        </Tab>
        <Tab id="Departures" value="departures">
          Departures
        </Tab>
      </TabList>
      <div className={styles.root}>
        {selectedValue === 'arrivals' && <SettingPanel />}
        {selectedValue === 'departures' && <DashboardPanel />}
      </div>
    </div>
  );
};
