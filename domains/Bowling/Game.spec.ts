import { expect } from 'chai';
import Game from './Game';

export default function() {
    describe('Game testing', function() {
    
        it('should start a bowling game', async function() {
            const game = new Game();
            expect(game.currentScore()).to.eql(0);
        });

    });
}
