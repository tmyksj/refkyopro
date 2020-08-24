# AtCoder Beginner Contest 003
## B - AtCoderトランプ
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    bool res = true;
    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        string u = "atcoder";
        bool sf = u.find(s[i]) != string::npos;
        bool tf = u.find(t[i]) != string::npos;
        res = res && (s[i] == t[i] || (s[i] == '@' && tf) || (sf && t[i] == '@'));
    }

    cout << (res ? "You can win" : "You will lose") << endl;
}
```
