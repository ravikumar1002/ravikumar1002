import { SxProps, Theme as DefaultTheme } from "@mui/material";

export type ClassNameMap<
  Theme extends DefaultTheme,
  ClassKey extends string = string
> = Record<ClassKey, SxProps<Theme>>;

export type SxStylesRecord<
  Theme extends DefaultTheme,
  ClassKey extends string = string
> = Record<ClassKey, SxProps<Theme>>;

export type SxStylesCallback<
  Theme extends DefaultTheme,
  Props extends object,
  ClassKey extends string = string
> = (props: Props) => SxStylesRecord<Theme, ClassKey>;

export type SxStyles<
  Theme extends DefaultTheme,
  Props extends object,
  ClassKey extends string = string
> = SxStylesRecord<Theme, ClassKey> | SxStylesCallback<Theme, Props, ClassKey>;

export type MakeSxStyleResponse<
  Theme extends DefaultTheme,
  Props extends object,
  ClassKey extends string = string
> = keyof Props extends never
  ? (props?: any) => ClassNameMap<Theme, ClassKey>
  : (props: Props) => ClassNameMap<Theme, ClassKey>;

const makeSxStyles =
  <
    Theme extends DefaultTheme,
    Props extends object = {},
    ClassKey extends string = string
  >(
    styles: SxStyles<Theme, Props, ClassKey>
  ): MakeSxStyleResponse<Theme, Props, ClassKey> =>
  (props: Props = {} as Props) =>
    typeof styles === "function" ? styles(props) : styles;

export default makeSxStyles;
