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
  ? // `MakeSxStyleResponse` where the passed `styles` do not depend on props
    (props?: any) => ClassNameMap<Theme, ClassKey>
  : // `MakeSxStyleResponse` where the passed `style s` do depend on props
    (props: Props) => ClassNameMap<Theme, ClassKey>;

/**
 * Create a React hooks to get the object sx styles. This is similar to the `makeStyles` on `@mui/styles`
 * @param styles - It can be a object with of type `Record<string,SxProps<Theme>>` or a function which accept the props a params.
 * Example 1 - simple object:
 * const useStyles = makeSxStyles({container: {color: 'primary.main'}});
 *
 * const classes = useStyles()
 * <Box sx={classes.container} />
 *
 * Example 2 - function:
 * const useStyles = makeSxStyles((props) => ({
 *  container: {color: props.isPrimary ? 'primary.main' : 'secondary.main'}
 * }));
 *
 * const classes = useStyles({isPrimary: true})
 * <Box sx={classes.container} />
 */
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
