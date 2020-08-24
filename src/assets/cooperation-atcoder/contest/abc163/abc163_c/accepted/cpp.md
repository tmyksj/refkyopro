# AtCoder Beginner Contest 163
## C - management
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> res(n, 0);
    for (int i = 1; i < n; i++) {
        int a;
        cin >> a;
        res[a - 1]++;
    }

    for (int i = 0; i < n; i++) {
        cout << res[i] << endl;
    }
}
```
