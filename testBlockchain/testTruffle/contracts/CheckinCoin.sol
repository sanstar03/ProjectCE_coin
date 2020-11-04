pragma solidity >= 0.4.21 <0.7.0;

import "./SafeMath.sol";

contract CheckInCoinContract {
    using SafeMath for uint256;
    address private owner;
    string private name;
    string private symbol;
    uint8 private decimals;
    uint256 private _totalSupply;
    mapping(address => uint256) private balances;
    mapping(address => mapping(address => uint256)) private allowed;

    constructor(uint256 _total) public {
        decimals = 18;
        _totalSupply = _total;
        owner = msg.sender;
        balances[msg.sender] = _totalSupply;
        name = "Checkin Coin";
        symbol = "C";
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not owner!!");
        _;
    }

    //GETTER
    function getName() public view returns (string memory) {
        return name;
    }

    function getSymbol() public view returns (string memory) {
        return symbol;
    }

    function getDecimals() public view returns (uint8) {
        return decimals;
    }

    //BASIC FUNCTION
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        if (
            _value > 0 &&
            balances[msg.sender] >= _value &&
            msg.sender != _spender
        ) {
            allowed[msg.sender][_spender] = _value;
            emit Approval(msg.sender, _spender, _value);
            return true;
        } else {
            return false;
        }
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        if (
            _value > 0 &&
            balances[msg.sender] >= _value &&
            msg.sender != _to &&
            balances[_to] + _value > balances[_to]
        ) {
            balances[msg.sender] = balances[msg.sender].sub(_value);
            balances[_to] = balances[_to].add(_value);
            emit Transfer(msg.sender, _to, _value);
            return true;
        } else {
            return false;
        }
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        if (
            _value > 0 &&
            balances[_from] >= _value &&
            _from != _to &&
            allowed[_from][msg.sender] >= _value &&
            balances[_to] + _value > balances[_to]
        ) {
            balances[_from] = balances[_from].sub(_value);
            balances[_to] = balances[_to].add(_value);
            emit Transfer(_from, _to, _value);
            return true;
        } else {
            return false;
        }
    }

    function allowance(address _owner, address _spender)
        public
        view
        returns (uint256 remaining)
    {
        return allowed[_owner][_spender];
    }
}