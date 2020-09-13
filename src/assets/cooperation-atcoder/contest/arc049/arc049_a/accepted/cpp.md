# AtCoder Regular Contest 049
## A - "強調"
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> p(4);
    for (int i = 0; i < 4; i++) {
        cin >> p[i];
    }

    for (int i = 0; i < static_cast<int>(s.size()); i++) {
        for (int j = 0; j < 4; j++) {
            if (p[j] == i) {
                cout << "\"";
            }
        }

        cout << s[i];
    }

    for (int i = 0; i < 4; i++) {
        if (p[i] == static_cast<int>(s.size())) {
            cout << "\"";
        }
    }
    cout << endl;
}
```
