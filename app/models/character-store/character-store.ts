import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterModel, CharacterSnapshot } from "../character/character"
import { withEnvironment } from "../extensions/with-environment"
import { withRootStore } from "../extensions/with-root-store"

/**
 * Example store containing Rick and Morty characters
 */
export const CharacterStoreModel = types
  .model("CharacterStore")
  .props({
    characters: types.optional(types.array(CharacterModel), []),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    saveCharacters: (characterSnapshots: CharacterSnapshot[]) => {
      self.characters.replace(characterSnapshots)
    },
  }))
  .actions((self) => ({
    getCharacters: async () => {
      await self.rootStore.graphqlApiStore.mutateLogin({email: "artem+1@gojilabs.com", password: "Asdfasdf1"})
    },
  }))

type CharacterStoreType = Instance<typeof CharacterStoreModel>
export interface CharacterStore extends CharacterStoreType {}
type CharacterStoreSnapshotType = SnapshotOut<typeof CharacterStoreModel>
export interface CharacterStoreSnapshot extends CharacterStoreSnapshotType {}
export const createCharacterStoreDefaultModel = () => types.optional(CharacterStoreModel, {})
