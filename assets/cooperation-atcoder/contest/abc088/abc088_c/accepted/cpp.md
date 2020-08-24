# AtCoder Beginner Contest 088
## C - Takahashi's Information
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<vector<int>> c(3, vector<int>(3));
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> c[i][j];
        }
    }

    cout << (c[0][0] - c[0][1] == c[1][0] - c[1][1]
            && c[0][0] - c[0][1] == c[2][0] - c[2][1]
            && c[0][0] - c[0][2] == c[1][0] - c[1][2]
            && c[0][0] - c[0][2] == c[2][0] - c[2][2] ? "Yes" : "No") << endl;
}
```
