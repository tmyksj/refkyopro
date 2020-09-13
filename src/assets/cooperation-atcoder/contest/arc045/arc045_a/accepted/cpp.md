# AtCoder Regular Contest 045
## A - スペース高橋君
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    vector<string> res(0);
    for (string s; cin >> s; ) {
        if (s == "Left") {
            res.push_back("<");
        } else if (s == "Right") {
            res.push_back(">");
        } else {
            res.push_back("A");
        }
    }

    for (int i = 0; i < static_cast<int>(res.size()); i++) {
        cout << (i == 0 ? "" : " ") << res[i];
    }
    cout << endl;
}
```
