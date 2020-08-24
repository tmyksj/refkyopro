# 第一回 アルゴリズム実技検定 過去問
## C - 3 番目
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> af(6);
    for (int i = 0; i < 6; i++) {
        cin >> af[i];
    }

    sort(af.begin(), af.end(), greater<int>());

    cout << af[2] << endl;
}
```
