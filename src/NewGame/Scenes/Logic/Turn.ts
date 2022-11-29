import Move from "./Move";

export default class Turn{
    private static moves: Move[] = [];

    static addMove(unitId: string, action: any, target: [number, number]){
        let added = false;
        for (let i = 0; i < Turn.moves.length; i++){
            if (Turn.moves[i].unitId == unitId){
                Turn.moves[i] = new Move(unitId, action, target);
                added = true
            }
        }
        if (!added){
            this.moves.push(new Move(unitId, action, target))
        }
    }

    static getMoves(){
        return Turn.moves;
    }

    static deleteMoves() {
        Turn.moves = [];
    }
}