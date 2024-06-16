import  {BlockType} from "../types/blocks";

export const generateBlockStub = (type: BlockType) => {
    switch (type) {
        case BlockType.Text:
            return {
                jsonb: {
                    text: '',
                    textSmall: ''
                }
            }
        case BlockType.Hero:
            return {
                jsonb: {
                    header: '',
                    text: '',
                    background: ''
                }
            }
        case BlockType.Speakers:
            return {
                jsonb: {
                    speakers: []
                }
            }
        case BlockType.IFrame:
            return {
                jsonb: {
                    src: '',
                    title: ''
                }
            }
        default:
            return {
                jsonb: {}
            }
    }
}
