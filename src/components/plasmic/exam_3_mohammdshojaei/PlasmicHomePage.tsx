// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oSMJcLWthsUUGZUEVVKFwy
// Component: LIoKBHyQxptX

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oSMJcLWthsUUGZUEVVKFwy/projectcss
import sty from "./PlasmicHomePage.module.css"; // plasmic-import: LIoKBHyQxptX/css

createPlasmicElementProxy;

export type PlasmicHomePage__VariantMembers = {};
export type PlasmicHomePage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomePage__VariantsArgs;
export const PlasmicHomePage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomePage__ArgsType = {};
type ArgPropType = keyof PlasmicHomePage__ArgsType;
export const PlasmicHomePage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomePage__OverridesType = {
  root?: Flex__<"div">;
  sefaresh?: Flex__<"section">;
  link?: Flex__<"a">;
};

export interface DefaultHomePageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomePage__RenderFunc(props: {
  variants: PlasmicHomePage__VariantsArgs;
  args: PlasmicHomePage__ArgsType;
  overrides: PlasmicHomePage__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "2PZ9Uj1TEAfLcpFi1VRqmy",
        opId: "a23202dc-9196-4b04-88e8-784c31a8f400",
        userArgs: {},
        cacheKey: `plasmic.$.a23202dc-9196-4b04-88e8-784c31a8f400.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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
          <section className={classNames(projectcss.all, sty.section__rnWmo)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uYuAz
              )}
            >
              {
                "\u0628\u0647 \u0648\u0628 \u0633\u0627\u06cc\u062a \u0633\u0641\u0627\u0631\u0634 \u063a\u0630\u0627 \u062e\u0648\u0634 \u0627\u0645\u062f\u06cc\u062f"
              }
            </div>
          </section>
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $ctx.pagePath;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <section
                data-plasmic-name={"sefaresh"}
                data-plasmic-override={overrides.sefaresh}
                className={classNames(projectcss.all, sty.sefaresh)}
                key={currentIndex}
              >
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.query.data.response.data;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_1, __plasmic_idx_1) => {
                  const currentItem = __plasmic_item_1;
                  const currentIndex = __plasmic_idx_1;
                  return (
                    <section
                      className={classNames(projectcss.all, sty.section__wKtPi)}
                      key={currentIndex}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mm8Us
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.namekarbar;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__rfLrT
                        )}
                      >
                        {
                          " : \u062a\u0639\u062f\u0627\u062f \u0633\u0641\u0627\u0631\u0634 \u0633\u06cc\u0628 \u0632\u0645\u06cc\u0646\u06cc "
                        }
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fvt8N
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.sibzamini;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__f1Qt
                        )}
                      >
                        {
                          ": \u062a\u0639\u062f\u0627\u062f \u0633\u0641\u0627\u0631\u0634 \u062f\u0633\u0631 \u0634\u06a9\u0644\u0627\u062a\u06cc"
                        }
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wJst
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.desershokolati;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__p8Qb
                        )}
                      >
                        {
                          ": \u062a\u0639\u062f\u0627\u062f \u0633\u0641\u0627\u0631\u0634 \u062e\u06cc\u0627\u0631 \u0634\u0648\u0631"
                        }
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kOtZc
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.khiarshor;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    </section>
                  );
                })}
              </section>
            );
          })}
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            href={`/new-page`}
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
  root: ["root", "sefaresh", "link"],
  sefaresh: ["sefaresh"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sefaresh: "section";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomePage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomePage__VariantsArgs;
    args?: PlasmicHomePage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomePage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomePage__ArgsType,
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
          internalArgPropNames: PlasmicHomePage__ArgProps,
          internalVariantPropNames: PlasmicHomePage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomePage";
  } else {
    func.displayName = `PlasmicHomePage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomePage = Object.assign(
  // Top-level PlasmicHomePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sefaresh: makeNodeComponent("sefaresh"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHomePage
    internalVariantProps: PlasmicHomePage__VariantProps,
    internalArgProps: PlasmicHomePage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomePage;
/* prettier-ignore-end */