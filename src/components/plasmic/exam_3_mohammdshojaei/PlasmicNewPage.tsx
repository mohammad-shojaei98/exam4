// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oSMJcLWthsUUGZUEVVKFwy
// Component: VJS6AZsNBAAu

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oSMJcLWthsUUGZUEVVKFwy/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: VJS6AZsNBAAu/css

createPlasmicElementProxy;

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: Flex__<"div">;
  form?: Flex__<"section">;
  form2?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
  link?: Flex__<"a">;
};

export interface DefaultNewPageProps {
  className?: string;
}

const $$ = {};

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form2.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form2",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form2.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form2",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"form"}
            data-plasmic-override={overrides.form}
            className={classNames(projectcss.all, sty.form)}
          >
            {(() => {
              const child$Props = {
                className: classNames("__wab_instance", sty.form2),
                extendedOnValuesChange:
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "value",
                    ["form2", "value"],
                    FormWrapper_Helpers
                  ),
                formItems: undefined,
                labelCol: { span: 8, horizontalOnly: true },
                layout: "vertical",
                mode: undefined,
                onFinish: async values => {
                  const $steps = {};

                  $steps["httpPost"] = true
                    ? (() => {
                        const actionArgs = {
                          dataOp: {
                            sourceId: "mws8nQC89etgSvUK9CmfJq",
                            opId: "6877d8fa-fa7f-4f2d-896e-64092b190f7b",
                            userArgs: {
                              body: [
                                $state.form2.value.namekarbar,
                                $state.form2.value.sibzamini,
                                $state.form2.value.khiarshor,
                                $state.form2.value.desershokolati
                              ]
                            },
                            cacheKey: null,
                            invalidatedKeys: ["plasmic_refresh_all"],
                            roleId: null
                          }
                        };
                        return (async ({ dataOp, continueOnError }) => {
                          try {
                            const response = await executePlasmicDataOp(
                              dataOp,
                              {
                                userAuthToken: dataSourcesCtx?.userAuthToken,
                                user: dataSourcesCtx?.user
                              }
                            );
                            await plasmicInvalidate(dataOp.invalidatedKeys);
                            return response;
                          } catch (e) {
                            if (!continueOnError) {
                              throw e;
                            }
                            return e;
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["httpPost"] != null &&
                    typeof $steps["httpPost"] === "object" &&
                    typeof $steps["httpPost"].then === "function"
                  ) {
                    $steps["httpPost"] = await $steps["httpPost"];
                  }
                },
                onIsSubmittingChange:
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "isSubmitting",
                    ["form2", "isSubmitting"],
                    FormWrapper_Helpers
                  ),
                ref: ref => {
                  $refs["form2"] = ref;
                },
                wrapperCol: { span: 16, horizontalOnly: true }
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "value",
                    plasmicStateName: "form2.value"
                  },
                  {
                    name: "isSubmitting",
                    plasmicStateName: "form2.isSubmitting"
                  }
                ],
                [],
                FormWrapper_Helpers ?? {},
                child$Props
              );

              return (
                <FormWrapper
                  data-plasmic-name={"form2"}
                  data-plasmic-override={overrides.form2}
                  {...child$Props}
                >
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__cg0Q
                    )}
                    initialValue={"none"}
                    label={
                      "\u0646\u0627\u0645 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"
                    }
                    name={"namekarbar"}
                  >
                    <AntdInput
                      className={classNames("__wab_instance", sty.input)}
                    />
                  </FormItemWrapper>
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__as7Ic
                    )}
                    initialValue={1}
                    label={"\u0633\u06cc\u0628 \u0632\u0645\u06cc\u0646\u06cc"}
                    name={"sibzamini"}
                  >
                    <AntdInputNumber
                      className={classNames(
                        "__wab_instance",
                        sty.numberInput__y6Sxh
                      )}
                      type={"number"}
                    />
                  </FormItemWrapper>
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__dnWta
                    )}
                    initialValue={1}
                    label={"\u062e\u06cc\u0627\u0631 \u0634\u0648\u0631"}
                    name={"khiarshor"}
                  >
                    <AntdInputNumber
                      className={classNames(
                        "__wab_instance",
                        sty.numberInput__iLfG4
                      )}
                      type={"number"}
                    />
                  </FormItemWrapper>
                  <FormItemWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.formField__hnqu
                    )}
                    initialValue={1}
                    label={
                      "\u062f\u0633\u0631 \u0634\u06a9\u0644\u0627\u062a\u06cc"
                    }
                    name={"desershokolati"}
                  >
                    <AntdInputNumber
                      className={classNames(
                        "__wab_instance",
                        sty.numberInput__mVytN
                      )}
                      type={"number"}
                    />
                  </FormItemWrapper>
                  <AntdButton
                    className={classNames("__wab_instance", sty.button)}
                    submitsForm={true}
                    type={"primary"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      {"Submit"}
                    </div>
                  </AntdButton>
                </FormWrapper>
              );
            })()}
          </section>
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            href={`/`}
            platform={"react"}
          >
            {
              "\u0631\u0641\u062a\u0646 \u0628\u0647 \u0635\u0641\u062d\u0647 \u0633\u0641\u0627\u0631\u0634 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0648\u0628 \u0633\u0627\u06cc\u062a"
            }
          </PlasmicLink__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "form", "form2", "input", "button", "text", "link"],
  form: ["form", "form2", "input", "button", "text"],
  form2: ["form2", "input", "button", "text"],
  input: ["input"],
  button: ["button", "text"],
  text: ["text"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: "section";
  form2: typeof FormWrapper;
  input: typeof AntdInput;
  button: typeof AntdButton;
  text: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    form2: makeNodeComponent("form2"),
    input: makeNodeComponent("input"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */