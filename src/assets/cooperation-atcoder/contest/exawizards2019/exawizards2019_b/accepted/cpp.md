# エクサウィザーズ 2019
## B - Red or Blue
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    int r = 0, b = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == 'R') {
            r++;
        } else {
            b++;
        }
    }

    cout << (r > b ? "Yes" : "No") << endl;
}
```
