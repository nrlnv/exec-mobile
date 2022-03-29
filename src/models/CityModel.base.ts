/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CityImageModel, CityImageModelType } from "./CityImageModel"
import { CityImageModelSelector } from "./CityImageModel.base"
import { CityModel, CityModelType } from "./CityModel"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  regions: IObservableArray<CityModelType>;
}

/**
 * CityBase
 * auto generated base class for the model CityModel.
 */
export const CityModelBase = withTypedRefs<Refs>()(ModelBase
  .named('City')
  .props({
    __typename: types.optional(types.literal("City"), "City"),
    childrenCount: types.union(types.undefined, types.integer),
    depth: types.union(types.undefined, types.integer),
    featured: types.union(types.undefined, types.null, types.boolean),
    image: types.union(types.undefined, types.null, types.late((): any => CityImageModel)),
    lft: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.null, types.string),
    parentId: types.union(types.undefined, types.null, types.integer),
    region: types.union(types.undefined, types.null, types.string),
    regions: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => CityModel)))),
    rgt: types.union(types.undefined, types.integer),
    slug: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CityModelSelector extends QueryBuilder {
  get childrenCount() { return this.__attr(`childrenCount`) }
  get depth() { return this.__attr(`depth`) }
  get featured() { return this.__attr(`featured`) }
  get lft() { return this.__attr(`lft`) }
  get name() { return this.__attr(`name`) }
  get parentId() { return this.__attr(`parentId`) }
  get region() { return this.__attr(`region`) }
  get rgt() { return this.__attr(`rgt`) }
  get slug() { return this.__attr(`slug`) }
  image(builder?: string | CityImageModelSelector | ((selector: CityImageModelSelector) => CityImageModelSelector)) { return this.__child(`image`, CityImageModelSelector, builder) }
  regions(builder?: string | CityModelSelector | ((selector: CityModelSelector) => CityModelSelector)) { return this.__child(`regions`, CityModelSelector, builder) }
}
export function selectFromCity() {
  return new CityModelSelector()
}

export const cityModelPrimitives = selectFromCity().childrenCount.depth.featured.lft.name.parentId.region.rgt.slug
