# 第一回日本最強プログラマー学生選手権-予選-
## D - Classified
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            for (int k = 0; ; k++) {
                if (((i ^ j) & (1 << k)) > 0) {
                    cout << (j == i + 1 ? "" : " ") << k + 1;
                    break;
                }
            }
        }
        cout << endl;
    }
}
```
