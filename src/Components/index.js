import Affix from "./Affix";
import { Alert, AlertErrorBoundary } from "./Alert";
import Anchor from "./Anchor";
import AutoComplete from "./AutoComplete";
import { Avatar, AvatarGroup } from "./Avatar";
import BackTop from "./BackTop";
import { Badge, BadgeRibbon } from "./Badge";
import Space from "./Space";
import { Breadcrumb, BreadcrumbItem, Separator } from "./Breadcrumb";
import Button from "./Button";
import Calendar from "./Calendar";
import Divider from "./Divider";
import { Link, Text, Paragraph, Title } from "./Typography";
import { Checkbox, CheckboxGroup } from "./Checkbox";
import {
  Input,
  InputGroup,
  InputPassword,
  InputSearch,
  InputTextArea,
} from "./Input/";

export {
  Button,
  Divider,
  Avatar,
  AvatarGroup,
  Affix,
  Anchor,
  Alert,
  AlertErrorBoundary,
  AutoComplete,
  BackTop,
  Badge,
  BadgeRibbon,
  Link,
  Input,
  InputGroup,
  InputPassword,
  InputSearch,
  InputTextArea,
  Space,
  Breadcrumb,
  BreadcrumbItem,
  Separator,
  Calendar,
  Checkbox,
  CheckboxGroup,
};

// import { Form, FormList, FormErrorList, FormItem, FormProvider } from "./Form";
// import { Layout, Header, Sider, Content, Footer } from "./Layout";
// import { TimePicker, TimePickerRangePicker } from "./TimePicker";
// import { Select, SelectOption, SelectOptGroup } from "./Select";
// import { Table, TableColumn, TableColumnGroup } from "./Table";
// import { DescriptionItem, Descriptions } from "./Descriptions";
// import { Text, Link, Title, Paragraph } from "./Typography";
// import { Statistic, StatisticCountdown } from "./Statistic";
// // import { Breadcrumb, BreadcrumbItem, Separator } from "./Breadcrumb";
// import { Radio, RadioGroup, RadioButton } from "./Radio";
// import { Tree, TreeNode, DirectoryTree } from "./Tree";
// import { List, ListItem, ListItemMeta } from "./List";
// import { Mentions, MentionsOption } from "./Mentions";
// import { Dropdown, DropdownButton } from "./Dropdown";
// import { Checkbox, CheckboxGroup } from "./Checkbox";
// import { CollapsePanel, Collapse } from "./Collapse";
// import { TimelineItem, Timeline } from "./Timeline";
// import { Alert, AlertErrorBoundary } from "./Alert";
// import { CardMeta, CardGrid, Card } from "./Card";
// import { CommonIcon, CustomIcon } from "./Icon";
// import { AvatarGroup, Avatar } from "./Avatar";
// import { BadgeRibbon, Badge } from "./Badge";
// import { Steps, Step } from "./Steps";
// import { TabsTabPane, Tabs } from "./Tabs";
// import { Tag, CheckableTag } from "./Tag";
// import { Col, Row } from "./Grid";
// import ConfigProvider from "./ConfigProvider";
// import AutoComplete from "./AutoComplete";
// import Notification from "./Notification";
// import InputNumber from "./InputNumber";
// import Pagination from "./Pagination";
// import PageHeader from "./PageHeader";
// import Popconfirm from "./Popconfirm";
// import Cascader from "./Cascader";
// import Calendar from "./Calendar";
// import Carousel from "./Carousel";
// import Progress from "./Progress";
// import Transfer from "./Transfer";
// import TreeSelect from "./Rate";
// import Tooltip from "./Tooltip";
// import Divider from "./Divider";
// import Comment from "./Comment";
// import Popover from "./Popover";
// import message from "./Message";
// import BackTop from "./BackTop";
// import Button from "./Button";
// import Switch from "./Switch";
// // import Upload from "./Upload";
// import Slider from "./Slider";
// import Drawer from "./Drawer";
// import Anchor from "./Anchor";
// import Result from "./Result";
// import Space from "./Space";
// import Affix from "./Affix";
// import Empty from "./Empty";
// import Modal from "./Modal";
// import Image from "./Image";
// import Rate from "./Rate";
// import Spin from "./Spin";

// import { Menu, MenuItemGroup, MenuItem, SubMenu, MenuDivider } from "./Menu";
// import {
//   DatePicker,
//   YearPicker,
//   QuarterPicker,
//   MonthPicker,
//   WeekPicker,
//   RangePicker,
// } from "./DatePicker";
// import {
//   Input,
//   InputGroup,
//   InputPassword,
//   InputSearch,
//   InputTextArea,
// } from "./Input";
// import {
//   Skeleton,
//   SkeletonParagraph,
//   SkeletonTitle,
//   SkeletonInput,
//   SkeletonImage,
//   SkeletonButton,
//   SkeletonAvatar,
// } from "./Skeleton";

// import Complete from "./AutoComplete";
// import AccountChange from "./Screens/AccountChange";
// import Apps from "./Screens/Apps";
// import Settings from "./Screens/Settings";
// import PSError from "./Screens/PSError";

// export {
//   PSError,
//   Settings,
//   Apps,
//   Button,
//   Text,
//   Link,
//   Title,
//   Paragraph,
//   CommonIcon,
//   CustomIcon,
//   Divider,
//   Col,
//   Row,
//   Layout,
//   Header,
//   Sider,
//   Content,
//   Footer,
//   Space,
//   Affix,
//   // Breadcrumb,
//   // BreadcrumbItem,
//   // Separator,
//   Dropdown,
//   DropdownButton,
//   Menu,
//   MenuItemGroup,
//   MenuItem,
//   SubMenu,
//   MenuDivider,
//   PageHeader,
//   Pagination,
//   Steps,
//   Step,
//   AutoComplete,
//   Cascader,
//   Checkbox,
//   CheckboxGroup,
//   DatePicker,
//   YearPicker,
//   QuarterPicker,
//   MonthPicker,
//   WeekPicker,
//   RangePicker,
//   // Form,
//   // FormList,
//   // FormErrorList,
//   // FormItem,
//   // FormProvider,
//   Input,
//   InputGroup,
//   InputPassword,
//   InputSearch,
//   InputTextArea,
//   InputNumber,
//   Mentions,
//   MentionsOption,
//   Radio,
//   RadioGroup,
//   RadioButton,
//   Rate,
//   Select,
//   SelectOption,
//   SelectOptGroup,
//   Slider,
//   Switch,
//   TimePicker,
//   TimePickerRangePicker,
//   Transfer,
//   TreeSelect,
//   // Upload,
//   AvatarGroup,
//   Avatar,
//   BadgeRibbon,
//   Badge,
//   Calendar,
//   CardMeta,
//   CardGrid,
//   Card,
//   Carousel,
//   CollapsePanel,
//   Collapse,
//   Comment,
//   DescriptionItem,
//   Descriptions,
//   Empty,
//   Image,
//   List,
//   ListItem,
//   ListItemMeta,
//   Popover,
//   Statistic,
//   StatisticCountdown,
//   Table,
//   TableColumn,
//   TableColumnGroup,
//   TabsTabPane,
//   Tabs,
//   Tag,
//   CheckableTag,
//   TimelineItem,
//   Timeline,
//   Tooltip,
//   Tree,
//   TreeNode,
//   DirectoryTree,
//   Alert,
//   AlertErrorBoundary,
//   Drawer,
//   message,
//   Modal,
//   Notification,
//   Popconfirm,
//   Progress,
//   Result,
//   Skeleton,
//   SkeletonParagraph,
//   SkeletonTitle,
//   SkeletonInput,
//   SkeletonImage,
//   SkeletonButton,
//   SkeletonAvatar,
//   Spin,
//   Anchor,
//   BackTop,
//   ConfigProvider,
//   Complete,
//   AccountChange,
// };
