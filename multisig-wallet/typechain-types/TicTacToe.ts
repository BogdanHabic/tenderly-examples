/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface TicTacToeInterface extends utils.Interface {
  functions: {
    "games(uint256)": FunctionFragment;
    "joinGame(uint256)": FunctionFragment;
    "makeMove(uint256,uint256,uint256)": FunctionFragment;
    "newGame()": FunctionFragment;
    "nrOfGames()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "games"
      | "joinGame"
      | "makeMove"
      | "newGame"
      | "nrOfGames"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "games",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "joinGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "makeMove",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "newGame", values?: undefined): string;
  encodeFunctionData(functionFragment: "nrOfGames", values?: undefined): string;

  decodeFunctionResult(functionFragment: "games", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeMove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nrOfGames", data: BytesLike): Result;

  events: {
    "GameCreated(uint256,address)": EventFragment;
    "GameOver(uint256,uint8)": EventFragment;
    "PlayerJoinedGame(uint256,address,uint8)": EventFragment;
    "PlayerMadeMove(uint256,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GameCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameOver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerJoinedGame"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerMadeMove"): EventFragment;
}

export interface GameCreatedEventObject {
  gameId: BigNumber;
  creator: string;
}
export type GameCreatedEvent = TypedEvent<
  [BigNumber, string],
  GameCreatedEventObject
>;

export type GameCreatedEventFilter = TypedEventFilter<GameCreatedEvent>;

export interface GameOverEventObject {
  gameId: BigNumber;
  winner: number;
}
export type GameOverEvent = TypedEvent<
  [BigNumber, number],
  GameOverEventObject
>;

export type GameOverEventFilter = TypedEventFilter<GameOverEvent>;

export interface PlayerJoinedGameEventObject {
  gameId: BigNumber;
  player: string;
  playerNumber: number;
}
export type PlayerJoinedGameEvent = TypedEvent<
  [BigNumber, string, number],
  PlayerJoinedGameEventObject
>;

export type PlayerJoinedGameEventFilter =
  TypedEventFilter<PlayerJoinedGameEvent>;

export interface PlayerMadeMoveEventObject {
  gameId: BigNumber;
  player: string;
  boardRow: BigNumber;
  boardCol: BigNumber;
}
export type PlayerMadeMoveEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  PlayerMadeMoveEventObject
>;

export type PlayerMadeMoveEventFilter = TypedEventFilter<PlayerMadeMoveEvent>;

export interface TicTacToe extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TicTacToeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number, number] & {
        playerOne: string;
        playerTwo: string;
        winner: number;
        playerTurn: number;
      }
    >;

    joinGame(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      _boardRow: PromiseOrValue<BigNumberish>,
      _boardCol: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    newGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nrOfGames(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  games(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number, number] & {
      playerOne: string;
      playerTwo: string;
      winner: number;
      playerTurn: number;
    }
  >;

  joinGame(
    _gameId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makeMove(
    _gameId: PromiseOrValue<BigNumberish>,
    _boardRow: PromiseOrValue<BigNumberish>,
    _boardCol: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  newGame(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nrOfGames(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number, number] & {
        playerOne: string;
        playerTwo: string;
        winner: number;
        playerTurn: number;
      }
    >;

    joinGame(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      _boardRow: PromiseOrValue<BigNumberish>,
      _boardCol: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    newGame(overrides?: CallOverrides): Promise<BigNumber>;

    nrOfGames(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "GameCreated(uint256,address)"(
      gameId?: null,
      creator?: null
    ): GameCreatedEventFilter;
    GameCreated(gameId?: null, creator?: null): GameCreatedEventFilter;

    "GameOver(uint256,uint8)"(
      gameId?: null,
      winner?: null
    ): GameOverEventFilter;
    GameOver(gameId?: null, winner?: null): GameOverEventFilter;

    "PlayerJoinedGame(uint256,address,uint8)"(
      gameId?: null,
      player?: null,
      playerNumber?: null
    ): PlayerJoinedGameEventFilter;
    PlayerJoinedGame(
      gameId?: null,
      player?: null,
      playerNumber?: null
    ): PlayerJoinedGameEventFilter;

    "PlayerMadeMove(uint256,address,uint256,uint256)"(
      gameId?: null,
      player?: null,
      boardRow?: null,
      boardCol?: null
    ): PlayerMadeMoveEventFilter;
    PlayerMadeMove(
      gameId?: null,
      player?: null,
      boardRow?: null,
      boardCol?: null
    ): PlayerMadeMoveEventFilter;
  };

  estimateGas: {
    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGame(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      _boardRow: PromiseOrValue<BigNumberish>,
      _boardCol: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    newGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nrOfGames(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    games(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinGame(
      _gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makeMove(
      _gameId: PromiseOrValue<BigNumberish>,
      _boardRow: PromiseOrValue<BigNumberish>,
      _boardCol: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    newGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nrOfGames(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}