# AtCoder Beginner Contest 109
## B - Shiritori
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> w(n);
    for (int i = 0; i < n; i++) {
        cin >> w[i];
    }

    bool flag = true;
    for (int i = 1; i < n && flag; i++) {
        if (w[i][0] != w[i - 1][w[i - 1].size() - 1]) {
            flag = false;
        }

        for (int j = 0; j < i && flag; j++) {
            if (w[i] == w[j]) {
                flag = false;
            }
        }
    }

    cout << (flag ? "Yes" : "No") << endl;
}
```
