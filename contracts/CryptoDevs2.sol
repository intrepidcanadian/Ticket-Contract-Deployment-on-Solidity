contract CryptoDevs is ERC721Enumerable, Ownable {

    string _baseTokenURI;

    IWhitelist whitelist;


    constructor(string memory _baseURI, address whitelistContract) ERC721("CryptoDevs", "CD") {

        _baseTokenURI = _baseURI;

        whiteList = IWhitelist(whitelistContract);
    }

}